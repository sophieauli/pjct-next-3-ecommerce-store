import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// isOpen is just a boolean;
const bannerStyles = (isOpen) => css`
  padding: 10px;
  transition: all 0.5s ease-in-out;
  height: 20px;
  position: fixed;
  bottom: 0;

  ${!isOpen &&
  css`
    height: 0;
    padding: 0;
    overflow: hidden;
  `};
`;

export default function CookieBanner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  // only happening on client side in the browser:

  useEffect(() => {
    const initialValue = window.localStorage.getItem('isBannerOpen');
    setIsBannerOpen(JSON.parse(initialValue));
  });
  return (
    <footer css={bannerStyles(isBannerOpen)}>
      <span>Please accept our cookie policy.</span>
      {/* {JSON.stringify(isBannerOpen)} to show whether isBannerOpen is true or false.*/}
      <button
        onClick={() => {
          setIsBannerOpen(false);
          window.localStorage.setItem('isBannerOpen', false);
        }}
      >
        OK
      </button>
    </footer>
  );
}
