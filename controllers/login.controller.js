function LoginController() {

    function isValidUserId(userList, user) {
        return userList.indexOf(user) >= 0;
    }

    function isEmailValid(userEmail) {
        return /@gmail\.com$/.test(userEmail)
    }

    function isPasswordLengthGreaterThan8(userPassword) {
        return userPassword.length > 8
    }

    return {
        isValidUserId,
        isEmailValid,
        isPasswordLengthGreaterThan8
    }
}

module.exports = LoginController();
