import {IProduct} from "./src/app/lib/Types/index";

export const mockData:IProduct[] = [
    {
        "id": 1,
        "name": "Men's Ski Jacket",
        "description": "A high-performance ski jacket for men",
        "price": 299.99,
        "image": "https://source.unsplash.com/random/300×300",
        "category": "Ski",
        "brand": "The North Face",
        "sku": "TNF-SKI-MJ01",
        "inventory": {
            "S": 10,
            "M": 20,
            "L": 15,
            "XL": 5
        }
    },
    {
        "id": 2,
        "name": "Women's Ski Pants",
        "description": "Warm and waterproof ski pants for women",
        "price": 199.99,
        "image": "https://source.unsplash.com/random/300×300",
        "category": "Ski",
        "brand": "Columbia",
        "sku": "COL-SKI-WP02",
        "inventory": {
            "S": 5,
            "M": 10,
            "L": 20,
            "XL": 15
        }
    },
];