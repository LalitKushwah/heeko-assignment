export default {
    HTTP_STATUS_MESSAGE_MAP: {
        401: 'You are not authorized to access requesed resource, please contact with system admin',
        403: 'Access Denied, Bad Credentials',
        404: 'Requested resource is not found'
    },
    apiMethods: {
        userLogin: 'user/login',
        resetPassword: 'user/resetpassword'
    }
};
