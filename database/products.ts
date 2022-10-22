// running backend code in the frontend:
import { sql } from './connect';

type Nullable<T> = T | null;
export type Product = {
  id: number;
  productName: string;
  color: string;
  price: number;
  description: string | null;
};

// to get all products:
export async function getProducts() {
  const products = await sql<Product[]>`
    SELECT * FROM products;
    `;

  return products;
}

// to only get a single product, e.g. for each (dynamic) product page:
export async function getSingleProductById(id: number) {
  const [productId] = await sql<[Product[]]>`
  SELECT * FROM products WHERE id = ${id}
`;

  return productId;
}

//alternatively:
// export async function getSingleProductById(id: number | undefined) {
//   if (!id) return undefined;

// // to delete a single product:
// export async function deleteSingleProductById(id: number) {
//   const [product] = await sql<Product[]>`
//   DELETE FROM
//   products
//   WHERE
//   id=${id}
//   RETURNING * `;
//   return product;
// }
