import { css, Global } from '@emotion/react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
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
          }
          h1 {
            font:
            font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica, sans-serif;
            color: #02bc07;
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
        `}
      />
      <CookieBanner />
      <Layout>
        {/* /*component refers to the current page that is being rendered. */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
// anything you add to app.js will be added to all pages!
