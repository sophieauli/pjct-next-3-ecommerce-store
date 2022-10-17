exports.up = async (sql) => {
  await sql`
      CREATE TABLE products(
        id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        product_name varchar(30) NOT null,
        color varchar(30) NOT null,
        price varchar(40),
        description varchar(200)

  )`;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE products`;
};
