const jwt = require('jsonwebtoken')

exports.AuthorizeUser = async (req,res,next) => {
    // Check whether token exists
    if(!req.headers['access-token']) return res.status(401).send({msg : "Unauthorised"});
    
    // Verify Token
    try {
        req.body.user = await jwt.verify(req.headers['access-token'], "SWERA");
        next()
    } catch(err){
        res.send(err);
    }
}

exports.isAdmin = async (req,res,next) => {
    console.log("hi");
    try {
    let decode = await jwt.verify(req.headers['access-token'], "SWERA");
    console.log(decode.role);
    if(decode.user.role == "admin")
        next()
    else
        res.status(403).send({msg: "You are not Admin"})
    }
    catch(err){
        res.send(err);
    }
}
