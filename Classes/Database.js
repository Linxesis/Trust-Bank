const fs = require("fs");

let GetDB = (DbFile) => {
    const RawData = fs.readFileSync("../Database.json");
    const DataBaseData = JSON.parse(RawData);

    return GetDB;
}

class Database {
    constructor(DbFile){
        this.DbFile = DbFile;
    }

    async GetData(Key){
        const Data = GetDB(this.DbFile);

        const Data = await this.Data[Key];
        return Data;
    }

    async AddData(Key, Value){
        this.Data[Key] = Value;
    }
}

exports.Database = Database;