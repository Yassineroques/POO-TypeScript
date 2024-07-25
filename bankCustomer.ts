const assert = require('assert');
class bankCustomer {
    private name : string;
    private secretCode: string;

    constructor(name: string, secretCode: string) {
        this.name = name;
        this.secretCode = secretCode;
    }

    public getName(): string {
        return this.name;
    }

    public verifyCodeInput(inputCode: string): boolean {
       if (this.secretCode == inputCode) {
        return true 
       } else {
        return false;
       }
    }
}






const customer = new bankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyCodeInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyCodeInput('3579'));