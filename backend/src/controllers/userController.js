//Necessary imports and turn its and objects
const user = require('../models/user');
const fs = require("fs-extra");

//Config my cloudinary for upload images
cloudinary.config({
    cloud_name: "dm3p6nlii",
    api_key: "921485912968493",
    api_secret: "z_we9gxnZRu0Hqh_QCaiR4rG7cA",
  });

// Constructor
class UserController{
    
    constructor(){
    }

    //Method for build users
    async save(req, res, next) {
        //Sending data to body
        let { name, email, password } = req.body;
        const existUser =  await user.findOne({ email: email });
        if(existUser == null){
            const obj = new user({ name, email, password });
            const r = await obj.save();
            if (r) {
                res.status(201).json(r);
            }
            next();
        }
        else{
            res.status(400).json({"message": "Email exists"})
        }
    }

    //Consult by Id
    findId(req, res) {
        //Response
        user.findById(req.params.id, (error, data) => {
        if (error) {
            //next(error);
            res.status(500).json({ error });
        } else {
            res.status(200).json(data);
        }
        });
    }
    //Upload photos since cloudinary
    async uploadAvatar(req, res){
        let id = req.body.id;
        const filename = req.file.path;
        const result = await cloudinary.v2.uploader.upload(filename)
        await fs.unlink(filename)
        const avatar = result.url
        let objUser = {id, avatar}

        user.findByIdAndUpdate(id, {
            $set: objUser
        }, (error, data)=>{
            if(error){
                res.status(500).json(error)
            }else{
                res.status(200).json({"message":  "Image uploaded sucessfully"})
            }
        })
    }

    //Update User
    userUpdate(req, res) {
        let { id, username, password } = req.body;
        let objUser = {
            username,
            password,
        };
        user.findByIdAndUpdate(
            id,
            {
                // obj updated
                $set: objUser,
            },
            (error, data) => {
                if (error) {
                res.status(500).json({ error });
                } else {
                res.status(200).json(data);
                }
            }
        );
    }

  //User Delete
  userDelete(req, res) {
    let { id } = req.body;
    //By Id
    user.findByIdAndRemove(id, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(data);
      }
    });
  }

  //Validate method
  login(req, res) {
    let user = req.body.username;
    let password = req.body.password;
    user.findOne({ username: user }, (error, data) => {
      if (error) {
        res.status(500).json({ message: "error" });
      } 
      else if (data == null) {
        res.status(200).json({ message: "User no registered" });
      } 
      else {
        if (password === data.password) {
          res.status(200).json({
            message: "Success",
            data,
          });
        } 
        else {
          res.status(200).json({ message: "Email / Password incorrects" });
        }
      }
    });
  }
}

//Export for reuse in the project
module.exports = UserController;