// import auth0 from 'auth0-js';
// import _isEmpty from 'lodash/isEmpty';
// import history from './history';
// import { AUTH_CONFIG_CUSTOM as AUTH_CONFIG } from './auth0-variables';
// import {
//   parseAccessToken,
//   setExpiration,
//   saveAuthorization
// } from '../../settings/LocalStorage';
// import {
//   loginUser,
//   getUserAuthorization,
//   getSecretKey,
//   getDefaultRole,
//   getRoleId,
//   getRoleName,
//   getPayloadRegister
// } from './helpers';

// export default class Auth {
//   auth0 = new auth0.WebAuth({
//     ...AUTH_CONFIG
//   });

//   constructor() {
//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//     this.handleAuthentication = this.handleAuthentication.bind(this);
//     this.isAuthenticated = this.isAuthenticated.bind(this);
//   }

//   login({ username, password }) {
//     this.auth0.login({
//       realm: 'AgencyUAT',
//       email: username,
//       password
//     });
//   }

//   handleAuthentication() {
//     this.auth0.parseHash((err, authResult) => {
//       if (authResult && authResult.accessToken && authResult.idToken) {
//         this.setSession(authResult);
//       }
//       if (err && authResult !== undefined) {
//         history.replace('/');
//         console.log(err);
//       }
//     });
//   }

//   setSession(authResult) {
//     const multiplied = authResult.expiresIn * 1000;
//     const expiresAt = JSON.stringify(multiplied + new Date().getTime());
//     localStorage.setItem('access_token', authResult.accessToken);
//     localStorage.setItem('id_token', authResult.idToken);
//     localStorage.setItem('expires_at', expiresAt);

//     setExpiration(28800, new Date().getTime());
//     localStorage.setItem('expiration_elapsed_hours', 2);

//     const accessToken = authResult.accessToken;
//     localStorage.setItem('access_token', accessToken);
//     const fromIdToken = parseAccessToken(accessToken);
//     this.auth0.client.userInfo(authResult.accessToken, (_, profile) => {
//       if (!_isEmpty(profile)) {
//         const AUTH_USERID = fromIdToken.sub.replace('auth0|', '');

//         localStorage.setItem('auth_user_id', AUTH_USERID);

//         const userAuthorization = getUserAuthorization(profile);
//         const SECRET_KEY = getSecretKey(profile);
//         const defaultRole = getDefaultRole(profile);
//         const roleName = getRoleName(userAuthorization, defaultRole);
//         const roleId = getRoleId(profile, roleName);
//         const payloadRegister = getPayloadRegister(
//           AUTH_USERID,
//           profile,
//           roleId,
//           roleName
//         );
//         saveAuthorization(userAuthorization, SECRET_KEY);
//         loginUser(
//           accessToken,
//           payloadRegister,
//           userAuthorization,
//           AUTH_USERID,
//           profile,
//           defaultRole
//         );
//       }
//     });
//   }

//   logout() {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('expires_at');
//     history.replace('/home');
//   }

//   isAuthenticated() {
//     const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//     return new Date().getTime() < expiresAt;
//   }
// }
