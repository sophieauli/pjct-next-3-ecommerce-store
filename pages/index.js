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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="homepage with logo"
          content="First page with logo - landing page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={mainStyle}>
        <Image
          src="/logo_landing.svg"
          alt="OMBRA logo"
          width="1000"
          height="1000"
        />
      </main>
    </div>
  );
}
