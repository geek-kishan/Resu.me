const User = require("../models/user");
const jwt = require("jsonwebtoken");
const encryption = require("./encryption");

module.exports = (req,res,next)=>{
    let userData = req.body;
    let email = userData.email;

    User.findOne({"email":email},(err,profile)=>{
        if(err){
            console.log(err);
            res.send("Internal Server Error");
        }else if(!profile){
            res.send("Wrong Credentials");
        }
        else if(profile){
            if(encryption.decrypt(profile.password) == userData.password){
                let payload = {subject: profile._id};
                let token = jwt.sign(payload,'key');
                res.send({token});
            }else if(encryption.decrypt(profile.password) !==userData.password){
                res.send("Wrong Credentials");
            }
        }
    });
}