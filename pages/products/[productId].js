import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getSingleProductById } from '../../database/connect';

const productsDescriptionBox = css`
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 20px;
  width: 75%;
`;
const productDescription = css`
  width: 250px;
  padding: -20px;
`;
const textDescription = css`
  font-style: 'Times New Roman';
  font-size: 18px;
  color: #5b5757;
  font-style: italic;
  font-style: normal;
`;

const buttonAddRemove = css`
  background-color: #f5f5f5;
  border-radius: 5px;
  border-width: 1px;
  width: 20px;
  margin: 5px;
`;

const buttonAddToCart = css`
  background-color: #f5f5f5;
  border-radius: 5px;
  border-width: 1px;
  font-style: italic;
`;

export default function Products(props) {
  const [count, setCount] = useState(1);
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
    <div css={productsDescriptionBox}>
      <Head>
        <title>About</title>
        <meta name="description" content="List page of all products" />
      </Head>

      <div>
        <Image
          src={`/${
            props.product.id
          }-${props.product.productName.toLowerCase()}.jpeg`}
          alt=""
          width="250px"
          height="300px"
          data-test-id="product-image"
        />
      </div>
      <div css={productDescription}>
        <h1>{props.product.productName}</h1>
        <h3 css={textDescription}>{props.product.description}</h3>
        <h3 data-test-id="product-price">EUR {props.product.price},- </h3>

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
              (cookieHatObject) => cookieHatObject?.id === props.product.id,
            );

            if (foundCookie !== undefined) {
              console.log(foundCookie.id);
            }

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
  );
}

//         {/* with the function above we first get the current cookie value and then set the cookie with every click. "else" means that if current cookie value is already there then its +1, so:*/}

export async function getServerSideProps(context) {
  // Retrieve the product ID from the URL:
  const productId = parseInt(context.query.productId);

  if (typeof productId === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'We are sorry, but that hat is MIA...',
      },
    };
  }

  const foundHat = await getSingleProductById(productId);
  console.log(foundHat);
  return {
    props: {
      product: foundHat,
    },
  };
}
