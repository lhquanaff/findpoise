#!/usr/bin/env python3
"""
FindPoise Review Generator Helper
Tạo khung bài viết review chuẩn Schema Astro 5 Content Layer
"""

import sys
import os
from datetime import datetime

TEMPLATE = """---
title: "{title}"
description: "{description}"
productName: "{product_name}"
brand: "{brand}"
category: "{category}"
price: {price}
rating: {rating}
publishDate: {date}
author: "FindPoise Editorial Team"
heroImage: "/images/reviews/{slug}.jpg"
affiliateUrl: "https://findpoise.com/out/{slug}"
retailer: "{retailer}"
couponCode: "{coupon_code}"
discount: "{discount}"
verdict: "{verdict}"
pros:
  - "Điểm cộng nổi bật 1"
  - "Điểm cộng nổi bật 2"
  - "Điểm cộng nổi bật 3"
cons:
  - "Điểm trừ cần lưu ý 1"
  - "Điểm trừ cần lưu ý 2"
specs:
  "Height Range": "25.0\\" to 50.0\\""
  "Weight Capacity": "350 lbs"
  "Motor Type": "Dual Motors"
  "Warranty": "10 Years"
featured: false
---

## Real-World Performance & Testing Consensus

Nội dung đánh giá chuyên sâu ở đây...
"""

def create_review(slug, product_name, brand, price, category="standing-desk"):
    target_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../src/content/reviews"))
    os.makedirs(target_dir, exist_ok=True)
    target_file = os.path.join(target_dir, f"{slug}.mdx")
    
    if os.path.exists(target_file):
        print(f"❌ File đã tồn tại: {target_file}")
        return

    content = TEMPLATE.format(
        title=f"{product_name} Review: Is It Worth It in 2026?",
        description=f"In-depth analysis of {product_name} by {brand}. We evaluate stability, motor speeds, and ergonomics.",
        product_name=product_name,
        brand=brand,
        category=category,
        price=price,
        rating=4.7,
        date=datetime.now().strftime("%Y-%m-%d"),
        slug=slug,
        retailer=f"{brand} Official",
        coupon_code="FINDPOISE10",
        discount="$10 OFF",
        verdict=f"{product_name} delivers excellent build quality and ergonomic comfort for remote professionals."
    )

    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"✅ Đã tạo bài review mới tại: {target_file}")

if __name__ == "__main__":
    # Example usage: python create_review_post.py secretlab-magnus-pro "Secretlab Magnus Pro" "Secretlab" 849.00
    if len(sys.argv) >= 5:
        create_review(sys.argv[1], sys.argv[2], sys.argv[3], float(sys.argv[4]))
    else:
        print("Sử dụng: python create_review_post.py <slug> <product_name> <brand> <price>")
