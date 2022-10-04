import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { products } from '../../database/products';

const productsLayout = css`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const productStyle = css`
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
            <div key={`product-${product.id}`} css={productStyle}>
              <h2>(product.name)</h2>
              <Image
                src={`/${product.id}-${product.name.toLowerCase()}.jpeg`}
                alt=""
                width="40px"
                height="60px"
              />
              <div>Sizes</div>
              <div>
                Image Name:{product.id}-{product.name.toLowerCase()}.jpeg
              </div>
              <div>
                <button>+</button>
                useStateWillGoHere
                <button>-</button>
              </div>
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
