//Import express
const express = require('express');
//Import mongoose
const mongoose = require('mongoose');
//Import the conection to Db
const DatabaseConnection = require("./database/databaseConnection");
//Import routes
const UserRoute = require('./routes/userRoutes');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const commentRoutes = require('./routes/commentRoutes');

//Init srver
class Server{
    constructor(){
        //Building an object´s conection to DB
        const dbConnection = new DatabaseConnection();
        //Variable to create app express
        this.app = express();
        //Config express's param for init server
        this.config();
    }

    config(){
        //Say port where server work it
        this.app.set('port', process.env.PORT || 3000);
        //Sendindg information Json
        this.app.use(express.json());
        this.app.use(cors())
        //Config root path
        let router = express.Router();
        router.get('/', (req, res) => {
            console.log("¡Conection successful!");
            res.status(200).json({message: "¡Conection successful"});
        });

        /*** CREATE ROUTES ***/

        //Create and import serverRouters
        const userR = new UserRoute();
        const imageR = new imageRoutes();
        const commentR = new commentRoutes();

        //Add the last route to the server
        this.app.use('/public', express.static(`${__dirname}/imagenes`))
        this.app.use(router);
        this.app.use(userR.router);
        this.app.use(imageR.router);
        this.app.use(commentR.router);

        //Init server and listenning
        this.app.listen( this.app.get('port'), ()=>{
            console.log("Running into the Port =>", this.app.get('port'));
        });
    }

    conectDB(){
        mongoose.connect(database.db).then(()=>{
            console.log("Conection to DB successful");
        }).catch((err)=>{
            console.error("Connection error");
        });
    }
}

const obj = new Server();