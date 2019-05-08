const fs = require("fs");

const DB = {}
DB.GetAsync = (Key) => {
    fs.readFileSync(__dirname + "/Databse.json", (err, data) => {
        if(err){
            throw err;
        }

        const DbData = JSON.parse(data);
        const RequestedData = DbData[Key];

        if (RequestedData){
            console.log(`Database Service: Gotten Entery - ${Key}`)
            return RequestedData;
        }
        console.log(`Database Service: Failed to Get Entery - ${Key}`)
        return null;
    });
};

DB.SetAsync = (Key, Data) => {
    fs.readFileSync(__dirname + "/Databse.json", (err, data) => {
        if(err){
            throw err;
        }

        const DbData = JSON.parse(data);
        const RequestedData = DbData[Key];

        if(RequestedData){
            DbData[Key] = Data;
        }
        fs.writeFileSync(__dirname + "/Databse.json", DbData , (err) => {
            if (err){
                throw err;
            }
            console.log(`Database Service: Saved Entery - ${Key}`)
        });
    });
};

exports.DatabaseService = DB;