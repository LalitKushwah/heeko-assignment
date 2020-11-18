const userService = require('../service/user');

module.exports.login = (req, res) => {
    const userLoginId = req.body.userLoginId;
    const userPassword = req.body.password;
    if (!userLoginId || !userPassword) {
        return res.status(400).send({ status: 400, message: 'All fields are mandatory' });
    }
    const response = userService.login(userLoginId, userPassword);
    console.log(response);
    res.status(response.status).send(response);
}

module.exports.resetPassword = (req, res) => {
    const userLoginId = req.body.userLoginId;
    const password = req.body.password;

    if (!userLoginId || !password ) {
        return res.status(400).send({ status: 400, message: 'All fields are mandatory'})
    }
    const response = userService.resetPassword(userLoginId, password);
    res.status(response.status).send(response);
}