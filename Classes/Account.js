class Account {
    constructor(Owner, AccountId, AccountName){
        this.AccountId = AccountId;
        this.AccountName = AccountName;
        this.Balance = 0;
        this.Owner = Owner;
        this.Transactions = {};
    }

    //Methods
    Withdraw(Amount){
        this.Balance -= Amount;
    }

    Add(Amount){
        this.Balance += Amount;
    }

    Send(Target, Amount){
        Target.Balance += Amount;
        this.Balance -= Amount;

        this.Transactions.push({
            "Target": Target,
            "Amount": Amount
        });

        Target.Transactions.push({
            "Target": this,
            "Amount": -Amount
        })
    }

    //Getters
    getAccountId(){
        return this.AccountId;
    }

    getAccountName(){
        return this.AccountName;
    }

    getBalance(){
        return this.Balance;
    }

    getOwner(){
        return this.Owner;
    }

    getTransactions(){
        return this.Transactions;
    }
}

exports.Account = Account;