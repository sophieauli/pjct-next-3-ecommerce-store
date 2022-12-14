import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/connect';

// import { Product, getProducts } from '../../database/products';

// style variable for hats incl rainbow hover for product name:

const outerFrame = css`
  border-style: solid;
  border-color: #f5f5f5;
  border-width: 5px;
  border-radius: 20px;
  width: auto;
`;

// displaying all products inside frame but not framed individually:
const productsLayout = css`
  display: grid;
  grid-template-columns: 0.5fr;
  grid-template-rows: 300px;
  grid-template-areas: 'image' 'description' 'subtotal' 'shipping' 'total';
  text-align: ;
  margin: 20px;
`;

// const singleProductInCartContainer = css`
//   display: flex;
//   flex-direction: row;
// `;

// // Container for description on right of every image:
// const productsDescriptionLayout = css`
//   display: flex;
//   flex-direction: row;
// `;

// // list of hats as an array (later to come from database):
// const products = [
//   { id: 1, name: 'rainbow', color: 'pink', price: 15 },
//   { id: 2, name: 'donut', color: 'blue', price: 15 },
//   { id: 3, name: 'cherry', color: 'white', price: 15 },
//   { id: 4, name: 'croc', color: 'blue', price: 15 },
// ];

export default function Cart(props) {
  function handleRemove(id) {
    const newCart = props.cart.filter((item) => item.id !== id);

    props?.setCart(newCart);
  }

  const hatCart = props.cart?.map((cart) => {
    return {
      ...cart,
      name: props.products.find((hat) => cart.id === hat.id)?.productName,
      price: props.products.find((hat) => cart.id === hat.id)?.price,
    };
  });
  const shipping = 2.99;
  const totalPrice = () => {
    return hatCart?.reduce(
      (accumulator, product) => accumulator + product.cart * product.price,
      0,
    );
  };
  console.log(hatCart);
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="cart" content="List of items placed in cart." />
      </Head>

      <h1>your cart</h1>
      <div css={outerFrame}>
        <div css={productsLayout}>
          {hatCart?.map((product) => {
            return (
              <div key={`product-${product.id}`}>
                <div data-test-id="cart-product-<product id>">
                  <Image
                    src={`/${product.id}-${product.name?.toLowerCase()}.jpeg`}
                    alt=""
                    width="250px"
                    height="300px"
                  />
                </div>
                <div css={productsLayout}>
                  <h3>{product.name}</h3>
                  <div data-test-id="cart-product-quantity-<product id>">
                    <span>amount: {product.cart}</span>
                  </div>
                  <div>individual price: EUR {product.price}.00</div>
                </div>

                <div> subtotal: EUR {product.price * product.cart}.00</div>
                <button
                  onClick={() => handleRemove(product.id)}
                  data-test-id="cart-product-remove-<product id>"
                >
                  remove all
                </button>
              </div>
            );
          })}
          <div>subtotal</div>
          <div data-test-id="cart-total">{totalPrice()}.00</div>
          <div>
            shipping: {!props.cart?.length ? <div>{''}</div> : shipping}
          </div>

          <div> TOTAL: {totalPrice() + shipping}</div>
        </div>
        <div>
          <Link href="/checkout">
            <button data-test-id="cart-checkout">check me out</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };

  // will be passed to the page component as props
  // as frontend: going from back- to frontend.
}
