import { css } from '@emotion/react';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts, Product } from '../../database/products';

// style variable for hats incl rainbow hover for product name:
const productsLayout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 20px;
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
const singleProductContainer = css`
  width: auto;
  padding: 10px;
  border-style: solid;
  border-color: #f5f5f5;
  border-width: 5px;
  border-radius: 20px;
`;

const productDescriptionBelowImage = css`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
`;

const productNameBelowImage = css`
  border: solid;
  border-radius: 5px;
  border-color: #939090;
  border-width: 1px;
  margin: auto;
  padding: 0px 5px;
`;

type Props = {
  products: Product[];
};

export default function Products(props: Props) {
  return (
    <>
      <Head>
        <title>all products</title>
        <meta name="product overview" content="List page of all products" />
      </Head>

      <h1>our hats</h1>
      <div css={productsLayout}>
        {props.products.map((product) => {
          return (
            <div key={`product-${product.id}`} css={singleProductContainer}>
              <div>
                <a data-test-id={`product-${product.id}`}>
                  <Link href={`products/${product.id}`}>
                    <Image
                      src={`/${
                        product.id
                      }-${product.productName.toLowerCase()}.jpeg`}
                      alt={`image of ${product.productName}`}
                      width="250px"
                      height="300px"
                    />
                  </Link>
                </a>
              </div>
              <div css={productDescriptionBelowImage}>
                <h3 css={productNameBelowImage}>
                  <Link href={`products/${product.id}`}>
                    {product.productName}
                  </Link>
                </h3>
                <div>EUR {product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
  // will be passed to the page component as props
  // as frontend: going from back- to frontend.
}
