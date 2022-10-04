import { css } from '@emotion/react';
// import Head from 'next/head';
import Link from 'next/link';

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center
  width: 100%;
  border-radius: 10px;
  background-color: #F5F5F5;
  font-style: 'Calibri Light';
  color: #939090
  border-radius: 6px;
  margin: 20px 20px;
  padding: 10px 20px;
  a {
    margin-left: 12px;
    margin-right: 12px;
  };`;

const navBarItems = css`
  a:link {
    color: #939090;
    text-decoration: none;
  }
  a:visited {
    color: #939090;
    text-decoration: underline;
  }
  a:hover {
    color: #5b5757;
  }
`;

const multicolorText = css`
  a:link {
    text-decoration: none;
  }
  a {
    color: #5b5757;
    background: linear-gradient(
      90deg,
      #df0504,
      #fd6634,
      #c4c525,
      #02bc07,
      #5073b8,
      #079dfc
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
  a:hover {
    color: transparent;
    transition: 500ms ease;
  }
`;

export default function Header() {
  return (
    <header>
      <title>Home</title>
      <meta name="description" content="XYZ" />
      <nav css={navStyle}>
        <div css={multicolorText}>
          <Link href="/"> OMBRA </Link>
        </div>
        <div css={navBarItems}>
          <Link href="/"> about </Link>
          <Link href="/products"> our hats </Link>
          <Link href="/inspo"> inspo </Link>
        </div>
        <div css={navBarItems}>
          <Link href="/cart"> shopping bag </Link>
        </div>
      </nav>
    </header>
  );
}
