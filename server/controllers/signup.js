const User = require("../models/user");
const encryption = require("./encryption");
const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    let userData = req.body;
    delete userData.confirmpassword;
    let password = userData.password;
    userData.password = encryption.encrypt(password);
    let email = userData.email;

    User.findOne({"email":email},(err, existedUser)=>{
        if(err){
            console.log(err);
            res.send("Internal Server Error");
        }else if(existedUser){
            res.send("Email Already Exists");
        }else {
            let profile = new User(userData);
            profile.save((err,savedProfile)=>{
                if(err){
                    res.send("Internal Server Error");
                }else{
                    let payload = {subject: savedProfile._id};
                    let token = jwt.sign(payload,'key');
                    console.log({token});
                    res.send({token});
                }
            });
        }
    });
}