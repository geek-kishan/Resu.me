const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.sendStatus(401).send("Unauthorized Access!");
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token == null){
        return res.sendStatus(401).send("Unauthorized Access!");
    }
    let payload = jwt.verify(token,'key');
    if(!payload){
        return res.sendStatus(401).send("Unauthorized Access!");
    }
    req.userId = payload.subject;
    next();
}