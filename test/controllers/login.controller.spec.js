const assert = require('assert');
const loginController =  require('../../controllers/login.controller');

describe('LoginController', function () {

  describe('isValidUser', function(){

    it('debe retornar verdadero si el id es valido', function(){
      let isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('debe retornar falso si el id es invalido', function(){
      let isValid = loginController.isValidUserId(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

    it('deberia retornar verdadero si el email es valido', function(){
      let isValid = loginController.isEmailValid('albeiro@gmail.com')
      assert.equal(isValid, true);
    });

    it('deberia retornar falso si el email es invalido', function(){
      let isValid = loginController.isEmailValid('albeiro.com')
      assert.equal(isValid, false);
    });

  });

});
