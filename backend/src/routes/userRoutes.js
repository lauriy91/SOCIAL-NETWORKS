//Import express and turn it and object
const express = require('express');

//Import it controller
const userController = require('../controllers/userController');
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
        //Validated routes
        this.router.post("/user/save", objUserC.save);
        this.router.get("/user/:id", objUserC.findId);
        this.router.get("/user", objUserC.findAll);
        this.router.put("/user/update/avatar", upload.single('avatar'), objUserC.uploadAvatar);
        this.router.put("/user/update", objUserC.userUpdated);
        this.router.delete("/user/delete", objUserC.userDelete);
    }
}

module.exports = userRoutes;