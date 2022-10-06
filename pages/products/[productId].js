import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

// import { products } from '../../pages/products/index.js';

const productsLayout = css`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 100%;
  a:link {
    text-decoration: none;
  }
  a {
    color: #939090;
    background: linear-gradient(
      90deg,
      #df0504,
      #fd6634,
      #c4c525,
      #02bc07,
      #5073b8,
      #079dfc
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
  a:hover {
    color: transparent;
    transition: 500ms ease;
  }
`;

export default function Products(props) {
  if (props.error) {
    return (
      <div>
        <h1>{props.error}</h1>
        Sorry, click <Link href="/products"> here </Link> to be directed back to
        our hats!
      </div>
    );
  }

  return (
    <div css={productsLayout}>
      <Head>
        <title>About</title>
        <meta name="description" content="List page of all products" />
      </Head>
      <h3>{props.product.name}</h3>
      <Image
        src={`/${props.product.id}-${props.product.name.toLowerCase()}.jpeg`}
        alt=""
        width="250px"
        height="300px"
      />
      <div>Id: {props.product.id}</div>
      <div>Type: {props.product.type}</div>
      <div>Accessory: {props.product.accessory}</div>
      <div>product name: {props.product.name}</div>
    </div>
  );
}

// export default function Products(props) {
//   return <div>product id: {props.productId}</div>;
// }

export function getServerSideProps(context) {
  // Retrieve the animal ID from the URL:
  const productId = parseInt(context.query.productId);

  // Finding the animal:
  const foundProduct = products.find((product) => {
    return product.id === productId;
  });
  if (typeof foundProduct === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Animal not found',
      },
    };
  }

  return {
    props: {
      product: foundProduct,
    },
  };
}
