const http = require('http');
const app = require('./app');
const fs = require('fs');
// require('dotenv').config();
const port = 8080;
const host = '127.0.0.1'

const server = http.createServer(app);

//start server
server.listen(port, () => {
    console.log('Server is running on port ' + port);
})
