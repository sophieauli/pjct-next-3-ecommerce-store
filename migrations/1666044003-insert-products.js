const products = [
  {
    id: 1,
    product_name: 'rainbow',
    color: 'pink',
    price: 15,
    description: 'This little hat will brighten any day!',
  },
  {
    id: 2,
    product_name: 'donut',
    color: 'blue',
    price: 15,
    description: 'For anyone with a sweet tooth...',
  },
  {
    id: 3,
    product_name: 'cherry',
    color: 'white',
    price: 15,
    description: 'This hat just screams summer!',
  },
  {
    id: 4,
    product_name: 'croc',
    color: 'blue',
    price: 15,
    description: 'A hat with a good bite to it...',
  },
];

exports.up = async (sql) => {
  await sql`INSERT INTO products${sql(
    products,
    'product_name',
    'color',
    'price',
    'description',
  )}
  `;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
    DELETE FROM
    products
    WHERE
    product_name = ${product.product_name} and
    color = ${product.color} and
    price = ${product.price} and
    description = ${product.description}
    `;
  }
};
