//Import express and turn it and object
const express = require('express');

//Import it controller
const imageController = require('../controllers/imageController');
const upload = require('../libs/storaje');

//Constructor
class imageRoutes{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //building an object type userController
        
        /*** CRUD ***/
        const objImage = new imageController();
        //Validated routes
        this.router.post("/image/save", upload.single('image'),  objImage.save)
        this.router.post("/image/like/:id", objImage.addLike)
        this.router.post("/image/unlike/:id", objImage.unLike)
        this.router.get("/image", objImage.findAll)
        this.router.delete("/image/delete", objImage.delete)

    }
}

module.exports = imageRoutes;