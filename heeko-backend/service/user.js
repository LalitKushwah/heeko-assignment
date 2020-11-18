const users = require('../dummy-users');

module.exports.login = (userLoginId, userPassword) => {
    const responseObj = {};
    const index = users.findIndex(user => user.userLoginId === userLoginId && user.password === userPassword);
    if (index > -1) {
        responseObj.status = 200;
        responseObj.message = 'User logged in successfully';
    } else {
        responseObj.status = 403;
        responseObj.message = 'Invalid credentials';
    }
    return responseObj;
}

module.exports.resetPassword = (userLoginId, password) => {
    let flag = false;
    const responseObj = {};
    users.map(user => {
        if (user.userLoginId == userLoginId) {
            user.password = password
            flag = true;
        }
    })
    if (!flag) {
        responseObj.status = 404;
        responseObj.message = 'User not found';
    } else {
        responseObj.status = 200;
        responseObj.message = 'Password updated successfully';
    }
    return responseObj;
}