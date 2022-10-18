import { css } from '@emotion/react';
import Head from 'next/head';
import { ProductCookieItem } from '../utils/cookies';
import Footer from './Footer';
import Header from './Header.js';

const mainStyles = css`
  padding: 10px 20px;
  margin: 20px;
`;

type CartNumber = {
  cart: ProductCookieItem[] | undefined;
};

type ChildrenProps = {
  children: JSX.Element;
};

export default function Layout(props: ChildrenProps & CartNumber) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon_OMBRA.ico" />
      </Head>

      <Header cart={props.cart} />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
