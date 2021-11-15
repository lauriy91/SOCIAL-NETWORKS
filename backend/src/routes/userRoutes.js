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
        const objUser = new UserController();
        //Validated routes
        this.router.post("/user/save", objUser.save);
        this.router.get("/user/:id", objUser.findId);
        this.router.get("/user", objUser.findAll);
        this.router.put("/user/update/avatar", upload.single('avatar'), objUser.uploadAvatar);
        this.router.put("/user/update", objUser.userUpdate);
        this.router.delete("/user/delete", objUser.userDeleted);
    }
}

module.exports = userRoutes;