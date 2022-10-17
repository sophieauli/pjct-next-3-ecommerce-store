import { config } from 'dotenv-safe';
import postgres from 'postgres';

// config() has to be on top of our files:
config();

// defining sql variable to later connect to the database:
const sql = postgres();

console.log(
  // connecting to database:
  await sql`
  SELECT * FROM products;
  `,
);

await sql.end();
