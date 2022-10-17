import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const logo = css`
  margin: 0 auto;
  position
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="First page with product overview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          css={logo}
          src="/logo_landing.svg"
          alt="OMBRA logo"
          width="1000"
          height="1000"
        />
      </main>
    </div>
  );
}
