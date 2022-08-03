
exports.authRequest = (req, res, next) => {
    //console.log(req.body)
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requseted-With,Content-Type,Accept,accept,Authorization ,token, Token'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE,GET,POST');
        return res.status(200).json({});
    }

    next();
};

exports.pageNotFound = (req, res, next) => {
    req.status = 404;
    const error = new Error('Routes not found')
    next(error);
};

exports.proddberr = (error, req, res, next) => {
    return res.status(req.status || 500).send({
        message: error.message,
    })
};

exports.devdberr = (error, req, res, next) => {
    return res.status(req.status || 500).send({
        message: error.message,
        stack: error.stack
    })
};





