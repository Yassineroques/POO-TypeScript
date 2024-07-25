var assert = require('assert');
var bankCustomer = /** @class */ (function () {
    function bankCustomer(name, secretCode) {
        this.name = name;
        this.secretCode = secretCode;
    }
    bankCustomer.prototype.getName = function () {
        return this.name;
    };
    bankCustomer.prototype.verifyCodeInput = function (inputCode) {
        if (this.secretCode == inputCode) {
            return true;
        }
        else {
            return false;
        }
    };
    return bankCustomer;
}());
var customer = new bankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyCodeInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyCodeInput('3579'));
