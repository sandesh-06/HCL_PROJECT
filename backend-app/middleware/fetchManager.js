const jwt = require('jsonwebtoken')
JWT_SECRET = "project+/project^status#$dashboard()for!an&IT=organization"

const fetchManager = (req, res, next)=>{
    //get the empid from the jwt token
    const token = req.header('auth-token') //getting auth-token from header in request
    if(!token){
        return res.status(401).send({error: "Please authenticate using a valid token"})
    }
    try {
         //verify the token given using our secret code 'JWT_SECRET'
        const data = jwt.verify(token, JWT_SECRET)

        req.manager = data.manager;
        //The purpose of this line is to attach the user information extracted from the JWT to the request object. This makes it available for later parts of the request handling process.
       

        next();
    } catch (error) {
        return res.status(401).send({error: "Please authenticate using a valid token"})
    }
   
}

module.exports = fetchManager;