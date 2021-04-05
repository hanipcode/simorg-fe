import Router from 'next/router';
import UserTypes from '../constants/UserTypes';
import { getToken, setLocalUser, setToken } from './localService';

const BASE_URL = 'http://localhost:8000/api';

function ApiError(message, errors) {
  this.name = 'ApiError';
  this.message = message;
  this.stack = new Error().stack;
  this.errors = errors;
}
ApiError.prototype = new Error();

export const zAdminFetch = (
  url,
  method = 'GET',
  body = {},
  { bodyType = 'json', overrideHeader = {} } = {}
) => {
  const token = getToken();
  const baseHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) {
    baseHeader['Authorization'] = `Bearer ${token}`;
  }
  const headers = Object.assign(baseHeader, overrideHeader);
  const dataObj = Object.keys(body);
  const nonEmptyData = {};
  if (dataObj.length > 0) {
    dataObj.forEach((key) => {
      if (body[key] !== undefined && body[key] !== null) {
        nonEmptyData[key] = body[key];
      }
    });
  }
  let bodyData;
  if (bodyType === 'json') {
    bodyData = JSON.stringify(nonEmptyData);
  }
  if (method === 'GET') {
    bodyData = undefined;
  }
  return fetch(`${BASE_URL}${url}`, {
    method,
    body: bodyData,
    headers,
  }).then(async (response) => {
    if (response.status === 401) {
      Router.push('/login?unauthenticated=true');
      return;
    }
    if (response.headers.get('Content-Type') === 'application/json') {
      if (response.status === 200) {
        return response.json();
      }
      const data = await response.json();
      if (data.errors && Object.keys(data.errors).length > 0) {
        throw new ApiError('Api Error', data.errors);
      }
      throw new Error('Unknown Api Error');
    }
    throw new Error('Unknonw Server Error, [Body of the response is not json]');
  });
};

export const registerApi = ({
  username,
  password,
  user_type_id = UserTypes.Admin,
}) =>
  zAdminFetch('/auth/register', 'POST', { username, password, user_type_id });

export const loginApi = ({ username, password }) =>
  zAdminFetch('/auth/login', 'POST', { username, password }).then(
    ({ data }) => {
      setLocalUser(data);
      setToken(data.token);
    }
  );

export const getCurrentUserApi = () => zAdminFetch('/users/me');

export const updateMemberApi = ({
  full_name,
  gender,
  birthplace,
  birthdate,
  origin_address,
  blood_type,
  university,
  faculty,
  major,
  address,
  email,
  photo,
  signature,
}) =>
  zAdminFetch(
    '/members',
    'POST',
    {
      full_name,
      gender,
      birthplace,
      birthdate,
      origin_address,
      blood_type,
      university,
      faculty,
      major,
      address,
      email,
      photo,
      signature,
      _method: 'PUT',
    },
    { bodyType: 'formData' }
  );
