//Necessary imports and turn its and objects
const user = require("../models/userModel");
const fs = require("fs-extra");

//Config my cloudinary for upload images
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dm3p6nlii",
  api_key: "921485912968493",
  api_secret: "z_we9gxnZRu0Hqh_QCaiR4rG7cA",
});

// Constructor
class UserController {
  constructor() {}

  //Method for build users
  async save(req, res, next) {
    //Sending data to body
    let { name, email, password } = req.body;
    const existUser =  await user.findOne({ email: email });
    if(existUser == null){
        const objUser = new user({ name, email, password });
        const r = await objUser.save();
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
        res.status(500).json({ error });
      } 
      else {
        res.status(200).json(data);
      }
    });
  }

  //Consult all users
  findAll(req, res) {
    user.find((error, data) => {
      if (error) {
        res.status(500).json({ error });
      } 
      else {
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
      let objUser = {avatar}

      //Update profile image by Id
      user.findByIdAndUpdate(id, {
          // obj updated
          $set: objUser
      }, (error, data)=>{
          if(error){
              res.status(500).json(error)
          }
          else{
              res.status(200).json({"message":  "Profile image was uploaded sucessfully"})
          }
      })
  }

  //Update user
  userUpdated(req, res) {
    let { id, email, password, name } = req.body;
    let objUser = {
      email, password, name
    };
    user.findByIdAndUpdate(
      id,
      {
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
    let id = req.params.id;
    //Deleted by Id
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
    let user = req.body.email;
    let password = req.body.password;
    user.findOne({ email: user }, (error, data) => {
      if (error) {
        res.status(500).json({ mensaje: "error" });
      } else if (data == null) {
        res.status(200).json({ message: "User no registered" });
      } else {
        if (password === data.password) {
          res.status(200).json({
            message: "Success",
            data,
          });
        } 
        else {
          res.status(200).json({ message: "Email / Password Incorrects" });
        }
      }
    });
  }
}

//Export for reuse in the project
module.exports = UserController;