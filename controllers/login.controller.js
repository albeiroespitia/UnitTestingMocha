function LoginController() {

  function isValidUserId(userList, user) {
    return userList.indexOf(user) >= 0;
  }

  function isEmailValid(userEmail) {
    return /@gmail\.com$/.test(userEmail)
  }

  return {
    isValidUserId,
    isEmailValid
  }

}

module.exports = LoginController();
