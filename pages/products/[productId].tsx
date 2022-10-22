import { css } from '@emotion/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { getSingleProductById, Product } from '../../database/products';
import { parseIntFromContextQuery } from '../../utils/contextQuery';
import { ProductCookieItem } from '../../utils/cookies';

const singleProductContainer = css`
  display: flex;
  flex-direction: row;
  width: auto;
  margin: 20px;
  border-style: solid;
  border-color: #f5f5f5;
  border-width: 5px;
  border-radius: 20px;
`;

const singleProductDescription = css`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  h1 {
    text-align: left;
  }
`;
// const productsDescriptionBox = css`
//   display: flex;
//   align-items: center;
//   border-radius: 15px;
//   border: 1px solid #ccc;
//   padding: 20px;
//   width: 75%;
// `;
// const productDescription = css`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   width: 250px;
//   padding: 20px;
// `;
// const textDescription = css`
//   font-style: 'Times New Roman';
//   font-size: 18px;
//   color: #5b5757;
//   font-style: italic;
//   font-style: normal;
// `;

const buttonAddRemove = css`
  color: #939090;
  background-color: #f5f5f5;
  border-radius: 5px;
  border-width: thin;
  border: solid;
  border-color: #939090;
  width: 20px;
  margin: 5px;
  padding: 0px 2px;
`;

const buttonAddToCart = css`
  color: #939090;
  background-color: #f5f5f5;
  border-radius: 5px;
  border-width: 1px;
  border-width: thin;
  border: solid;
  border-color: #939090;
  width: 80px;
  padding: 0px 2px;
  &hover {
    cursor: grab;
  }
`;

type CartSingleProduct = {
  cart: ProductCookieItem[] | undefined;
  setCart: Dispatch<SetStateAction<ProductCookieItem[] | undefined>>;
};

type Props =
  | {
      product: Product;
    }
  | {
      error: string;
    };

export default function Products(props: Props & CartSingleProduct) {
  const [count, setCount] = useState(1);
  if ('error' in props) {
    return (
      <div>
        <Head>
          <title>Product not found</title>
          <meta name="single product page" content="Hat not found" />
        </Head>
        <h1>{props.error}</h1>
        Click <Link href="/products"> here </Link> to be directed back to our
        hats!
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{props.product.productName}</title>
        <meta
          name="description"
          content={`This is a page to showcase ${props.product.productName} alone.`}
        />
      </Head>

      <div css={singleProductContainer}>
        <div>
          <Image
            src={`/${
              props.product.id
            }-${props.product.productName.toLowerCase()}.jpeg`}
            alt={`${props.product.color} colored hat with a ${props.product.productName} on it.`}
            width="250px"
            height="300px"
            data-test-id="product-image"
          />
        </div>

        <div css={singleProductDescription}>
          <h1>{props.product.productName}</h1>
          <h3>{props.product.description}</h3>
          <h3 data-test-id="product-price">EUR {props.product.price},- </h3>

          <div data-test-id="product-quantity">
            <button
              css={buttonAddRemove}
              onClick={() => {
                if (count === 0) {
                  return;
                }
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              {' '}
              -{' '}
            </button>
            {count}
            <button
              css={buttonAddRemove}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>

            <button
              data-test-id="product-add-to-cart"
              css={buttonAddToCart}
              onClick={() => {
                if (!props.cart) {
                  props.setCart([
                    {
                      id: props.product.id,
                      cart: count,
                    },
                  ]);
                  return;
                }
                const foundCookie = props.cart.find(
                  (cookieProductObject: ProductCookieItem) =>
                    cookieProductObject?.id === props.product.id,
                );

                // if (foundCookie !== undefined) {
                //   console.log(foundCookie.id);
                // }

                if (!foundCookie) {
                  props.cart.push({
                    id: props.product.id,
                    cart: count,
                  });
                } else {
                  foundCookie.cart = foundCookie.cart + count;
                }
                const newQuantity = [...props.cart];

                props.setCart(newQuantity);
              }}
            >
              {' '}
              add to cart{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//         {/* with the function above we first get the current cookie value and then set the cookie with every click. "else" means that if current cookie value is already there then its +1, so:*/}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Props>> {
  // Retrieve the product ID from the URL:
  const productId = parseIntFromContextQuery(context.query.productId);

  if (typeof productId === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'We are sorry, but that hat could not be found...',
      },
    };
  }

  const foundHat = await getSingleProductById(productId);

  if (typeof foundHat === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'We are sorry, but that hat could not be found...',
      },
    };
  }

  return {
    props: {
      product: foundHat,
    },
  };
}
