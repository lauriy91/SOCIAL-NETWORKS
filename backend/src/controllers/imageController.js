//Necessary imports and turn its and objects
const ImageModel = require("../models/imageModel");
const fs = require("fs-extra");

//Config my cloudinary for upload images
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dm3p6nlii",
  api_key: "921485912968493",
  api_secret: "z_we9gxnZRu0Hqh_QCaiR4rG7cA",
});

// Constructor
class imageController{
    constructor() {}

    //Method for upload and save images
    async save(req, res, next) {
        //Sending data to body 
        let {user_id, user_name} = req.body;
        const obj = new ImageModel({user_id, user_name})
        const filename = req.file.path
        const result = await cloudinary.v2.uploader.upload(filename)
        await fs.unlink(filename)
        obj.setImage(result.url)
        const r = await obj.save();
            if (r) {
                res.status(201).json(r);
            }
        next();
    }

    //Adding likes to the images
    async addLike(req, res){
        let id = req.params.id
        let objImage = await ImageModel.findOne({id:id})
        let addlike = objImage.likes + 1;
        let obj = {likes: addlike}
        ImageModel.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data)=>{
            if(error){
               res.status(500).json(error)
            }else{
                res.status(200).json({"likes":  addlike})
            }
        })
    }

    // Removing likes
    async unLike(req, res){
        let id = req.params.id
        let objImage = await ImageModel.findOne({id:id})
        if(objImage.likes > 0){
            let addlike = objImage.likes - 1;
            let obj = {likes: addlike}
            ImageModel.findByIdAndUpdate(id, {
                $set: obj
            }, (error, data)=>{
                if(error){
                    res.status(500).json(error)
                }else{
                    res.status(200).json({"likes":  addlike})
                }
            })
        }else{
            res.status(200).json({"likes":  0})
        }
        
    }

    //Consult images and order by date
    async findAll (req, res){
       const img = await ImageModel.find().sort({ timestamp: -1 })
       res.status(200).json(img)
    }

    //Delete images by Id
    delete(req, res){
        let id = req.params.id;
        ImageModel.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }
}

module.exports = imageController;