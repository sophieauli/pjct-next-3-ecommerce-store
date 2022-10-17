import { config } from 'dotenv-safe';
import postgres from 'postgres';

// config function loads all variables from .env file

config();

declare module globalthis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        column: {
          to: postgres.fromCamel,
          from: postgres.toCamel,
        },
      },
    });
  }
  const sql = globalThis.postgresSqlClient;
  return sql;
}

export const sql = connectOneTimeToDatabase();

// const sql = postgres({
//   // transform: {
//   //   column: {
//   //     to: postgres.fromCamel,
//   //     from: postgres.toCamel,
//   //   },
//   // },
// });

// const products = await sql;

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
