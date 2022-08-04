const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
    // console.log(req.headers);
    try {
       
        if(req.headers != undefined && req.headers.token != undefined && req.headers.token != ""){
            const token = req.headers.token.trim();

            const decoded = jwt.verify(token, process.env.JWT_KEY);
            
            req.UserData = decoded;
            next()
        }else{
            return res.status(401).send({
                message: 'Auth failed',
                status: false
            })
        }

    } catch (error) {
        return res.status(401).send({
            message: 'Auth failed',
            status: false
        })
    }
}






