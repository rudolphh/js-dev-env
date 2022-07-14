import 'whatwg-fetch';

import getBaseUrl from './base-url';

const baseUrl = getBaseUrl();

// only one exported function
export function getUsers(){
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function del(url) {
  return fetch(baseUrl + url, { method: 'DELETE' }).then(onSuccess, onError);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
