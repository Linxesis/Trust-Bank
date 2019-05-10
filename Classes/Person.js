const Account = require("./Account");

class Person {
    constructor(Name){
        this.Id = 0;
        this.Name = Name;
        this.Accounts = {};
    }

    //Methods
    CreateAccount(AccountName){
        const NewAccount = new Account(this, 0, AccountName);
        this.Accounts.push(NewAccount);
    }

    //Getters
    getAccounts(){
        return this.Accounts;
    }

    getId(){
        return this.Id;
    }

    getName(){
        return this.Name;
    }
}

exports.Person = Person;