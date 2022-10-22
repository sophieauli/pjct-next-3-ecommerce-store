import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const navBarStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  color: #939090;
  a:link {
    color: #939090;
    text-decoration: none;
  }
  a:visited {
    color: #939090;
    text-decoration: underline;
  }
  a:hover {
    color: #302e2e;
  }
`;

const rainbowText = css`
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

export default function Header(props) {
  const cartAmountCount = props.cart?.reduce(
    (accumulator, product) => accumulator + product.cart,
    0,
  );
  console.log(props.cart);
  return (
    <header>
      <title>Home</title>
      <meta name="description" content="XYZ" />
      <nav css={navBarStyle}>
        <div css={rainbowText}>
          <Link href="/"> OMBRA </Link>
        </div>
        <div>
          <Link href="/products" data-test-id="products-link">
            our hats
          </Link>
        </div>
        <div data-test-id="cart-count">
          <Link href="/cart" data-test-id="cart-link">
            <a>cart ({props.cart ? cartAmountCount : 0})</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
