// import config from 'config';
// import Cookie from 'react-cookie';
// import memoizeOne from 'memoize-one';
// import { GetBaseUrl } from './Deployment';
// import { encrypt, decrypt } from './crypto';

// const isChrome = !!window.chrome && !!window.chrome.webstore;
// let bc = {};
// if (isChrome) {
//   bc = new BroadcastChannel('ubidy_channel');
//   bc.onmessage = ev => {
//     const isReloaded = localStorage.getItem('isReloaded');
//     if (ev.data === 'Logged Out' && isReloaded === 'false') {
//       localStorage.setItem('isReloaded', 'true');
//       window.location.reload(true);
//     }
//   };
// }
// const sk = 'WQ6UCMAkSkjOMi0WBZ3V8n94FiX2avOJ5J4E2mpoyc72wtZrhz9oDWwx9d6z0oVc';

// export const loadState = () => {
//   try {
//     const serializedState = sessionStorage.getItem('state');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// export const saveState = state => {
//   try {
//     const serializedState = JSON.stringify(state);
//     sessionStorage.setItem('state', serializedState);
//   } catch (err) {
//     return err;
//   }
//   return undefined;
// };

// export const clearState = () => {
//   sessionStorage.clear();
//   localStorage.clear();
// };

// export const loadStateFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem('state');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// export function getUserType() {
//   return Cookie.load('agency_userType');
// }

// export const getAccessToken = () => localStorage.getItem('access_token');

// export function getAuthUserId() {
//   return localStorage.getItem('auth_user_id');
// }

// export function getUserRole() {
//   return localStorage.getItem('user_role');
// }

// export function parseAccessToken(token) {
//   const base64Url = token.split('.')[1];
//   const base64 = base64Url.replace('-', '+').replace('_', '/');
//   return JSON.parse(window.atob(base64));
// }

// export function getUserId() {
//   return Cookie.load('agency_userId');
// }

// const encryptRecord = (object, key) => {
//   const data = JSON.stringify(object);
//   const encryptedData = encrypt(key, data);
//   return encryptedData;
// };

// export const saveAuthorization = (records, key) => {
//   try {
//     const encryptedData = encryptRecord(records, key);
//     localStorage.setItem('user_authorization', encryptedData);
//   } catch (err) {
//     return err;
//   }
//   return undefined;
// };

// export const encryptAuthorization = authorizationData => {
//   const secretKey = sk;
//   saveAuthorization(authorizationData, secretKey);
// };

// export const getAuthorization = () => {
//   const secretKey = sk;

//   try {
//     const userAuthorization = localStorage.getItem('user_authorization');
//     if (userAuthorization === null) {
//       return undefined;
//     }
//     const encryptedData = decrypt(secretKey, userAuthorization);
//     return JSON.parse(encryptedData);
//   } catch (err) {
//     return undefined;
//   }
// };

// export const cookieSave = (key = '', value = '', domain = '') => {
//   Cookie.save(key, value, { path: '/', domain });
// };

// const removeEmployerCookies = domain => {
//   Cookie.remove('employer_isAuthenticated', { path: '/', domain });
//   Cookie.remove('employer_tenantId', { path: '/', domain });
//   Cookie.remove('employer_userId', { path: '/', domain });
//   Cookie.remove('employer_userType', { path: '/', domain });
//   Cookie.remove('employer_messenger_user', { path: '/', domain });
// };

// export const saveCookie = (payload, domain) => {
//   const encryptedData = encryptRecord(payload.messengerUser, domain);
//   cookieSave('agency_userType', payload.userType, domain);
//   cookieSave('agency_userId', payload.userId, domain);
//   cookieSave('agency_tenantId', payload.tenantId, domain);
//   cookieSave('agency_isAuthenticated', payload.isAuthenticated, domain);
//   cookieSave('agency_messenger_user', encryptedData, domain);
//   cookieSave('access_token', payload.accessToken, domain);
//   removeEmployerCookies(domain);
// };

// export function getTenantId() {
//   const TENANTID = Cookie.load('agency_tenantId');
//   return TENANTID;
// }

// export const setExpiration = (value, currentTime) => {
//   const domain = GetBaseUrl('domainBase');
//   const multiplied = value * 1000;
//   console.log(currentTime);
//   console.log(value);
//   const expiresAt = JSON.stringify(multiplied + currentTime);
//   const checkDate = new Date();
//   checkDate.setTime(expiresAt);
//   console.log(`expires_at: ${checkDate}`);
//   localStorage.setItem('expires_at', expiresAt);
//   cookieSave('expires_at', expiresAt, domain);
// };

// export const isExpired = () => {
//   const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//   const currentTime = new Date().getTime();
//   const isExpiredInEightHours = currentTime > expiresAt;
//   if (isExpiredInEightHours) {
//     return true;
//   }
//   return false;
// };

// const isExpiredMemoized = memoizeOne(isExpired);

// export const clearCookie = (domain, fromLogout = '') => {
//   Cookie.remove('agency_isAuthenticated', {
//     path: '/',
//     domain
//   });
//   Cookie.remove('agency_userId', {
//     path: '/',
//     domain
//   });
//   Cookie.remove('agency_userType', {
//     path: '/',
//     domain
//   });
//   Cookie.remove('agency_messenger_user', {
//     path: '/',
//     domain
//   });

//   Cookie.remove('_ga', {
//     path: '/',
//     domain: '.auth0.com'
//   });
//   Cookie.remove('_gid', {
//     path: '/',
//     domain: '.auth0.com'
//   });
//   Cookie.remove('ajs_anonymous_id', {
//     path: '/',
//     domain: '.auth0.com'
//   });
//   Cookie.remove('ajs_user_id', {
//     path: '/',
//     domain: '.auth0.com'
//   });
//   Cookie.remove('auth0l', {
//     path: '/',
//     domain: '.auth0.com'
//   });
//   Cookie.remove('current_tenant', {
//     path: '/',
//     domain: '.auth0.com'
//   });

//   localStorage.removeItem('tenantInfo');
//   localStorage.removeItem('state');
//   sessionStorage.removeItem('state');

//   localStorage.removeItem('auth_user_id');
//   localStorage.removeItem('user_role');

//   if (isChrome) {
//     bc.postMessage('Logged Out'); /* send */
//   }
//   const clientId = config.authClientId;
//   const tenantId = getTenantId();
//   const removeApplication = () => {
//     Cookie.remove('agency_tenantId', {
//       path: '/',
//       domain
//     });

//     localStorage.removeItem('expires_at');
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('user_access_token');
//     localStorage.removeItem('user_expires_at');
//     localStorage.removeItem('user_authorization');
//     localStorage.removeItem('expiration_elapsed_hours');

//     Cookie.remove('access_token', {
//       path: '/',
//       domain
//     });
//     Cookie.remove('expires_at', { path: '/', domain });
//   };
//   if (tenantId !== '' && tenantId !== null && tenantId !== undefined) {
//     removeEmployerCookies(domain);
//     removeApplication();
//     const origin = `${window.location.origin}${
//       fromLogout === 'fromLogout' ? '' : '/session-expired'
//     }`;
//     const logoutUrl = `https://ubidy.au.auth0.com/v2/logout?returnTo=${origin}&client_id=${clientId}`;
//     window.location = logoutUrl;
//   }
// };

// export const isAdmin = () => {
//   const USER_ROLE = getUserRole();
//   return USER_ROLE === 'Admin Account';
// };

// export function getIsDemo() {
//   const isDemo = localStorage.getItem('is_demo');
//   return isDemo === 'true';
// }

// export const TENANT_ID = getTenantId();
// export const USER_ID = getUserId();
// export const AUTH_USER_ID = getAuthUserId();

// export const redirectToSessionIfExpired = () => {
//   if (!window.navigator.onLine) {
//     window.location = '/no-internet-connection';
//   }
//   if (isExpiredMemoized()) {
//     const domain = GetBaseUrl('domainBase');
//     clearCookie(domain);
//   }
// };

// export const increaseNotificationCount = () => {
//   let notificationCount = localStorage.getItem('notification_count');

//   if (!notificationCount) {
//     notificationCount = 0;
//   }

//   localStorage.setItem(
//     'notification_count',
//     (parseInt(notificationCount, 10) + 1).toString()
//   );
// };

// export const getNotificationCount = () => {
//   const notificationCount = localStorage.getItem('notification_count');

//   if (!notificationCount) {
//     return 0;
//   }

//   return parseInt(notificationCount, 10);
// };

// export const setNotificationCount = count => {
//   let notificationCount = 0;
//   if (count) {
//     notificationCount = count;
//   }
//   localStorage.setItem('notification_count', notificationCount);
// };

// export const clearNotificationCount = () => {
//   localStorage.setItem('notification_count', '0');
// };
