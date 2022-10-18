import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer.tsx';
import Header from './Header';

const mainStyles = css`
  padding: 10px 20px;
  margin: 20px;
`;

export default function Layout(props) {
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
