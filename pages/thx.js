import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const mainStyle = css`
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
`;

export default function Thx(props) {
  return (
    <>
      <Head>
        <title>thank you</title>
        <meta name="thank you page" content="thank you page after checkout" />
      </Head>

      <main css={mainStyle}>
        <Image
          src="/thankyou_centered.svg"
          alt="OMBRA logo"
          width="1000"
          height="1000"
        />
      </main>
    </>
  );
}
