import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

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
            font-family: -apple-system, BlinkMacSystemFont, 'Calibri Light',
              'Open Sans', 'Helvetica Neue', sans-serif;
            margin: 20px;
            color: 5B5757;
          }
          h1 {
            font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica,
              sans-serif;
            color: #02bc07;
            font-size: 25px;
            text-align: center;
            /* background: linear-gradient(
              90deg,
              to #df0504,
              #fd6634,
              #c4c525,
              #02bc07,
              #5073b8,
              #079dfc
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; */
          }
          h2 {
            font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica,
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
