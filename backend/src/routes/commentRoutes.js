//Import express and turn it and object
const express = require('express');

//Import it controller
const CommentController = require('../controllers/commentController');

//Constructor
class commentRoutes{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //building an object type userController
        const obj = new CommentController();
        
        /*** CRUD ***/
        //Validated routes
        this.router.post("/comment/save",  obj.addComment);
        this.router.get("/comment/:id", obj.findByIdImage);
        this.router.delete("/comment/delete/:id", obj.delete);

    }
}

module.exports = commentRoutes;