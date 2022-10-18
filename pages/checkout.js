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
        <meta
          name="checkout"
          content="Checkout page with form to fill out with billing and shipping info."
        />
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

        <label htmlFor=">streetAndHousenumber" data-test-id="checkout-address">
          {' '}
          street and housenumber
        </label>

        <input required />

        <label htmlFor="postalCode" data-test-id="checkout-postal-code">
          {' '}
          postal code{' '}
        </label>

        <input required />

        <label htmlFor="city" data-test-id="checkout-city">
          city
        </label>
        <input required />

        <label htmlFor="country" data-test-id="checkout-country">
          country
        </label>
        <input required />

        <h2>payment</h2>
        <label htmlFor="creditCardNumber" data-test-id="checkout-credit-card">
          credit card number
        </label>
        <input pattern="[0-9]{16}" placeholder="XXXX XXXX XXXX XXXX" required />

        <label htmlFor="expirationDate" data-test-id="checkout-expiration-date">
          valid until
        </label>
        <input placeholder="MM/YY" required />

        <label htmlFor="securityCode" data-test-id="checkout-security-code">
          security code
        </label>
        <input pattern="[0-9]{3}" placeholder="XXX" required />

        <button data-test-id="checkout-confirm-order">place order</button>
      </form>
    </div>
  );
}
