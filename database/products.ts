// running backend code in the frontend:
import fs from 'node:fs';
import { sql } from './connect';

type Nullable<T> = T | null;
export type Product = {
  id: number;
  productName: string;
  color: string;
  price: number;
  description: Nullable<string>;
};

export async function getProducts() {
  const products = await sql<Product[]>`
    SELECT * FROM products;
    `;

  return products;
}

export async function getSingleProductById(id: number) {
  const [productId] = await sql<[Product]>`
  SELECT * FROM products WHERE id = ${id}
`;

  return productId;
}
