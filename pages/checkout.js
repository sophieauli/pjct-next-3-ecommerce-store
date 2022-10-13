import { css } from '@emotion/react';
import Head from 'next/head';

export default function Checkout(props) {
  const shipping = 2.99;
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = './thx';
  };

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name="shopping cart" content="shopping cart" />
      </Head>
      <div>
        <h1>checkout</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>personal</h2>
        <label htmlFor="firstName" data-test-id="checkout-first-name">
          first name
        </label>
        <input type="text" required />
        <label htmlFor="lastName" data-test-id="checkout-last-name">
          last name
        </label>
        <input type="text" required />

        <label type="email" htmlFor="email" data-test-id="checkout-email">
          e-mail
        </label>

        <input required />

        <h2>shipping</h2>

        <label htmlFor=">streetAndHousenumber"> street and housenumber</label>

        <input required />

        <label htmlFor="postalCode"> postal code </label>

        <input required />

        <label htmlFor="city">city</label>
        <input required />

        <label htmlFor="country">country</label>
        <input required />

        <h2>payment</h2>
        <label htmlFor="creditCardNumber">credit card number</label>
        <input pattern="[0-9]{16}" placeholder="XXXX XXXX XXXX XXXX" required />

        <label htmlFor="expirationDate">valid until</label>
        <input placeholder="MM/YY" required />

        <label htmlFor="securityCode">security code</label>
        <input pattern="[0-9]{3}" placeholder="XXX" required />

        <button>place order</button>
      </form>
    </div>
  );
}
