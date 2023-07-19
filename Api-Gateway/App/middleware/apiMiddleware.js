//console.log(process.env.CLE)
const jwt = require('jsonwebtoken');

const admin  = async (req, res, next) => {
try {
    const token = req.headers.authorization.split(' ')[1];
    //decoded the token
    const decodedToken = jwt.verify(token, process.env.CLE);
   // const userId = decodedToken.id;
    const userRole = decodedToken.role;

   
    if (userRole === 'admin') {
    next();
    } else{
        res.status(401).json({error: 'Non Autoriser'});
    }
} catch (err) {
    console.log(err.message);
    res.status(401).json({
    error: 'Unauthorized requestt!'
    });
}
};

module.exports = admin;