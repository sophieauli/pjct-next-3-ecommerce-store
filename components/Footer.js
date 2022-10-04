import { css } from '@emotion/react';

const footerStyles = css`
  margin-top: 20px;
  padding: 15px 20px;
  padding-top: 10px;
  border-top: 1px solid #b4e1ff;
`;

export default function Footer() {
  return <footer css={footerStyles}>'(c) Ombra</footer>;
}
