const assert = require('assert');
const loginController =  require('../../controllers/login.controller');

describe('LoginController', function () {

    describe('isValidUser', function(){

        it('deberia retornar verdadero si el id es valido', function(){
            let isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
            assert.equal(isValid, true);
        });

        it('deberia retornar falso si el id es invalido', function(){
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

        it('deberia retornar verdadero si la contraseña tiene mas de 8 caracteres', function(){
            let isValid = loginController.isPasswordLengthGreaterThan8('123456789')
            assert.equal(isValid, true);
        });

        it('deberia retornar falso si la contraseña tiene menos de 8 caracteres', function(){
            let isValid = loginController.isPasswordLengthGreaterThan8('1234567')
            assert.equal(isValid, false);
        });

    });

});
