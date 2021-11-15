//Import mongoose
const mongoose = require('mongoose');

//Import url's DB
const database = require('./urlDatabase');

//Create a class for the conection to DB
class DatabaseConnection {

    //Create a constructor
    constructor() {
        //Generating conection to DB
        mongoose.connect(database.db).then(() => {
            console.log("Connection DB successful");
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = DatabaseConnection;