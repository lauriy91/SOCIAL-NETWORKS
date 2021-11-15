//Necessary imports and turn its and objects
const CommentModel = require("../models/commentModel");

// Constructor
class CommentController {
  constructor() {}

  //Add comment
  addComment(req, res) {
    CommentModel.create(req.body, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        //Return successful message
        res.status(201).json(data);
      }
    });
  }

  //Comment Delete
  delete(req, res){
    let {id} = req.params;
    //Deleted by Id
    CommentModel.findByIdAndRemove(id, (error, data) => {
        if(error){
            res.status(500).json({error});
        }
        else{
            res.status(200).json(data);
        } 
    });
}  

    findByIdImage(req, res){
        let id = req.params.id;
        CommentModel.find({image_id: id}, (error, data)=>{
            if(error){
                res.status(500).json(error);
            }
            else{
                res.status(200).json(data);
            } 
        })
    }
}

//Export for reuse in the project
module.exports = CommentController;