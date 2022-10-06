import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// import { Product, getProducts } from '../../database/products';

// style variable for hats incl rainbow hover for product name:
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
// rainbow frame:
const productFrameStyle = css`
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(
      50deg,
      #df0504,
      #fd6634,
      #c4c525,
      #02bc07,
      #5073b8,
      #079dfc
    )
    1;
  background-size: 300% 300%;
  margin-top: 5px;
  padding: 5px;
  color: #5b5757;
`;

// useState for product counter:
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

// list of hats as an array (later to come from database):
const products = [
  { id: 1, name: 'rainbow', type: 'hat' },
  { id: 2, name: 'donut', color: 'blue' },
  { id: 3, name: 'cherry', color: 'white' },
  { id: 4, name: 'croc', color: 'blue' },
];

export default function Products(props) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="List page of all products" />
      </Head>

      <h1>our hats</h1>
      <div css={productsLayout}>
        {props.products.map((product) => {
          return (
            <div key={`product-${product.id}`}>
              <div css={productFrameStyle}>
                <Link href={`products/${product.id}`}>
                  <Image
                    src={`/${product.id}-${product.name.toLowerCase()}.jpeg`}
                    alt=""
                    width="250px"
                    height="300px"
                  />
                </Link>
              </div>
              <h3>
                <Link href={`products/${product.id}`}>{product.name}</Link>
              </h3>
              <div>Sizes</div>
              <Counter />
            </div>
          );
        })}
      </div>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      abc: 123,
      products: products,
    },
  };
  // will be passed to the page component as props
  // as frontend: going from back- to frontend.
}
