//Import express and turn it and object
const express = require('express');

//Import it controller
const userController = requiere('../controllers/userController');
const upload = require('../libs/storaje');

//Constructor
class userRoutes{

    constructor(){
        this.router =express.Router();
        this.config();
    }

    config(){
        //building an object type userController
        const objUserC = new userController();

        /*** CRUD ***/
        //Is assigned to the route the consult user method
        this.router.post("/user/save", objUserC.userSaved);
        //Validation route
        this.router.get("/users/login", objUserC.userLogin);
        this.router.get("/users", objUserC.userConsult);
        this.router.get("/user/:id", objUserC.userFindId);
        this.router.put("/user/update/avatar", upload.single('avatar'), objUserC.uploadAvatar);
        this.router.delete("/users/:id", objUserC.userDeleted);
    }
}

module.exports = userRoutes;