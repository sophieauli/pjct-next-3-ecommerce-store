import { css } from '@emotion/react';
import Head from 'next/head';

export default function Thx(props) {
  return (
    <>
      <Head>
        <title>Thx</title>
        <meta name="thx" content="thank you page after checkout" />
      </Head>
      Thank you for your order!
    </>
  );
}
