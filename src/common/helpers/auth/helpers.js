// import config from 'config';
// import axios from 'axios';
// import queryString from 'query-string';
// import { saveCookie, clearCookie } from '../../settings/LocalStorage';
// import { removeTenantIdText, isQaTesterEmail } from '../../utils/Methods';
// import { GetUrl, GetBaseUrl } from '../../settings/Deployment';
// import USER_TYPE from '../../settings/UserTypes';
// import { catchErrorResponse } from '../../utils/Messages';
// import { userRole, minimumLoginsCount } from '../../utils/Constants';
// import { roles } from '../myPermissions';
// import history from './history';

// const urlRegister = GetUrl('profileBaseUrl', 'createTenant');
// const domain = GetBaseUrl('domainBase');

// const getLoginsCount = profile => {
//   const loginsCount =
//     profile['https://ubidy:au:auth0:com/user_metadata'].logins_count || 0;
//   return loginsCount;
// };

// export const loginUser = (
//   accessToken,
//   payloadRegister,
//   userAuthorization,
//   authId,
//   profile,
//   defaultRole
// ) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   axios.defaults.headers.post['Content-Type'] = 'application/json';
//   const url = `${urlRegister}?${queryString.stringify(payloadRegister)}`;
//   return axios
//     .post(url)
//     .then(resultReg => {
//       const myRole = removeTenantIdText(
//         userAuthorization.roles[0],
//         resultReg.data.userProfileResults.tenantId
//       );
//       const messengerUser = {
//         isEmployer: false,
//         tenantId: resultReg.data.userProfileResults.tenantId,
//         userId: resultReg.data.userProfileResults.userId,
//         authId,
//         userName: profile.name,
//         firstName:
//           payloadRegister.primaryContactFirstName ||
//           resultReg.data.userProfileResults.firstName,
//         lastName:
//           payloadRegister.primaryContactLastName ||
//           resultReg.data.userProfileResults.lastName,
//         jobTitle: resultReg.data.userProfileResults.jobTitle,
//         role: userAuthorization.roles.length > 0 ? myRole : 'Admin',
//         email: profile.name,
//         organizationName: payloadRegister.organizationName,
//         domain: payloadRegister.organizationName,
//         photoThumbUrl:
//           resultReg.data.userProfileResults.photoThumbUrl || profile.picture
//       };
//       const payload = {
//         userType: USER_TYPE.Agency,
//         userId: resultReg.data.userProfileResults.userId,
//         tenantId: resultReg.data.userProfileResults.tenantId,
//         isAuthenticated: true,
//         messengerUser,
//         accessToken
//       };

//       const USER_ROLE =
//         userAuthorization.roles.length > 0 ? myRole : defaultRole;
//       localStorage.setItem('user_role', USER_ROLE);
//       localStorage.setItem('is_demo', isQaTesterEmail(messengerUser.userName));
//       saveCookie(payload, domain);

//       const isAdminAccount =
//         USER_ROLE === userRole.adminAccount ||
//         USER_ROLE === userRole.owner ||
//         USER_ROLE === userRole.oldSubUser;

//       let defaultPathName = isAdminAccount ? '/profile' : '/account';

//       const loginsCount = getLoginsCount(profile);

//       if (loginsCount > minimumLoginsCount) {
//         // defaultPathName = '/activitystream/notification'; // 22s
//         // defaultPathName = '/account'; // 4.89s
//         defaultPathName = '/account'; // 4.89s
//       }

//       // history.replace(defaultPathName);
//       window.location = defaultPathName;
//     })
//     .catch(regError => {
//       history.replace('/something-went-wrong');
//       clearCookie(domain);
//       catchErrorResponse(regError);
//     });
// };

// export const getUserAuthorization = profile =>
//   profile['https://ubidy:au:auth0:com/app_metadata'].authorization;

// export const getSecretKey = profile =>
//   profile['https://ubidy:au:auth0:com/configuration'].secret_key;

// export const getDefaultRole = profile => {
//   const role =
//     profile['https://ubidy:au:auth0:com/user_metadata'].tenant_id === undefined
//       ? roles.owner
//       : roles.noRole;
//   return role;
// };

// export const getRoleId = (profile, roleName) => {
//   let roleId =
//     profile['https://ubidy:au:auth0:com/user_metadata'].user_role !== undefined
//       ? profile['https://ubidy:au:auth0:com/user_metadata'].user_role
//       : config.authStandardUserAccountId;

//   if (roleName === roles.owner || roleName === roles.adminAccount) {
//     roleId = config.authAdminAccountId;
//   }

//   if (roleName === roles.noRole) {
//     roleId = config.authStandardUserAccountId;
//   }
//   return roleId;
// };
// export const getRoleName = (userAuthorization, defaultRole) => {
//   let roleName =
//     userAuthorization.roles.length > 0
//       ? userAuthorization.roles[0]
//       : defaultRole;

//   if (roleName === roles.owner || roleName === roles.adminAccount) {
//     roleName = roles.adminAccount;
//   }

//   if (roleName === roles.noRole) {
//     roleName = 'Ubidy=Standard User Account';
//   }
//   return roleName;
// };

// export const getPayloadRegister = (authId, profile, roleId, roleName) => ({
//   authId,
//   userName: profile.name,
//   primaryContactFirstName:
//     profile['https://ubidy:au:auth0:com/user_metadata']
//       .primary_contact_first_name ||
//     profile['https://ubidy:au:auth0:com/user_metadata'].primaryContactFirstName,
//   primaryContactLastName:
//     profile['https://ubidy:au:auth0:com/user_metadata']
//       .primary_contact_last_name ||
//     profile['https://ubidy:au:auth0:com/user_metadata'].primaryContactLastName,
//   primaryContactEmail: profile.name,
//   organizationName:
//     profile['https://ubidy:au:auth0:com/user_metadata'].organization_name ||
//     profile['https://ubidy:au:auth0:com/user_metadata'].organizationName,
//   roleId,
//   roleName
// });
