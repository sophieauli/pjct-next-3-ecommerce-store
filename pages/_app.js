import '@fontsource/montserrat';
import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout.tsx';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies.ts';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState();

  useEffect(() => {
    const getCookie = getParsedCookie('cart');
    if (getCookie) {
      setCart(getCookie);
    }
  }, []);

  useEffect(() => {
    if (typeof cart !== 'undefined') {
      setStringifiedCookie('cart', cart);
    }
  }, [cart]);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            font-family: 'Montserrat';
            color: #939090;
            align-items: center;
            width: 100vw;
            padding: 20px;
          }
          h1 {

              sans-serif;
            color: #939090;
            text-align: center;
          }
          h2 {

              sans-serif;
            font-size: 25px;
            color: #5b5757;
          }
        `}
      />
      <CookieBanner />
      <Layout cart={cart} setCart={setCart}>
        {/* /*component refers to the current page that is being rendered. */}
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Layout>
    </>
  );
}

export default MyApp;
// anything you add to app.js will be added to all pages!
