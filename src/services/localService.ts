export const getToken = () => localStorage.getItem('app/token');
export const setToken = (token: string) =>
  localStorage.setItem('app/token', token);
export const getLocalUser = () =>
  window && localStorage.getItem('app/user')
    ? JSON.parse(localStorage.getItem('app/user'))
    : null;
export const setLocalUser = (user: any) =>
  localStorage.setItem('app/user', JSON.stringify(user));
