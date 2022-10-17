import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const thx = css`
  margin: 0 auto;
  position: center;
`;

export default function Thx(props) {
  return (
    <>
      <Head>
        <title>Thx</title>
        <meta name="thx" content="thank you page after checkout" />
      </Head>

      <main>
        <Image
          css={thx}
          src="/thankyou_centered.svg"
          alt="OMBRA logo"
          width="1000"
          height="1000"
        />
      </main>
    </>
  );
}
