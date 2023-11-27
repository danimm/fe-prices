import type { Price } from "~/types/price";

export interface Product {
    id: string
    price: Price,
    description: string
}
