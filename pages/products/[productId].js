import { products } from '../../database/products';

export default function Products(props) {
  return <div> product id: {props.productId}</div>;
}

export function getServerSideProps(context) {
  const productId = context.query.productId;
}

console.log(
  'product',
  products.find((product) => {
    return product.id === productId;
  }),
);

return {
  props: { productId: productId },
};
