const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const middleware = require('./commonMiddleware/middleware')


require('express-async-errors')

//database
require('./database/mongo');


//----------------------------------------------Router Start -------------------------

    //---------------------------User Start----------------------------
    const UserRouter = require('./api/v1/router/User')
    //-------------------------User End---------------------------


//----------------------------------------------Router END -------------------------



//--------------------------------------middleware start-----------------------------------------
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(middleware.authRequest)
//-----------------------------------middlleware end---------------------------------------------




//-----------------------------------routes calling start----------------------------------------

//User start
app.use('/user', UserRouter)
//User end

//---------------------------------routes calling end------------------------------------------------

//---------------------------------request not found-------------------------------------------------
app.use(middleware.pageNotFound);

if (app.get('env') === 'production') {
    //error handler
    app.use(middleware.proddberr)
} else {
    //error handler
    app.use(middleware.devdberr)
}
//----------------------------------export app ----------------------------------------------------------
module.exports = app