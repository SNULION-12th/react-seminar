import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// set cookie information, not use in this project
export const setCookie = (name, value, options) => {
  return cookies.set(name, value, {...options});
}

// get cookie information
export const getCookie = (name) => {
  return cookies.get(name);
}

// remove cookie information
export const removeCookie = (name) => {
  cookies.remove(name);
}