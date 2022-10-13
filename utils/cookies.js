import Cookies from 'js-cookie';

// function to parse a browser Cookie string and return an object of all cookie name-value pairs:
export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    // if cookie is not a string
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
    // if cookie is not a string because it's JSON we parse it to convert it into a JavaScript value or object.
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
