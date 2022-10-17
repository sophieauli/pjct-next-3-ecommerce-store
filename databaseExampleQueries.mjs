import { type } from 'os';
import { products } from './database/products';

CREATE TABLE products(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_name varchar(30) NOT null,
  color varchar(30) NOT null,
  price varchar(40),
  description varchar(200)

);

INSERT INTO products
(product_name, color, price, description)
  VALUES
('rainbow', 'pink', 15, 'No matter if rain or shine - this hat is meant to brighten your day!'),
( 'donut', 'blue', 15, 'Perfect for anyone with a certain sweet tooth...' ),
('cherry', 'white', 15,'This hat screams SUMMER!'),
('croc', 'blue', 15, 'Just in case you did not wanna talk to anybody, we have got you covered...');
