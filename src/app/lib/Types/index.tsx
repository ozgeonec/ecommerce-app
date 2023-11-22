export interface IProduct {
    id: number
    name: string
    description?: string
    price: number
    image: string
    category?: string
    brand: string
    sku?: string
    inventory?: {
        [key: string]: number
    };
}

export interface ICart {
    product: IProduct;
    quantity: number;
}