

const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponse.js');
const imgHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;



const onRequest = (request, response) => {
    console.log(request.url);

    switch (request.url) {
        case '/':
            htmlHandler.getIndex(request, response);
            break;
        case '/page2':
            htmlHandler.getPage2(request, response);
            break;
        case 'hello':
            textHandler.getHello(request, response);
            break;
        case '/time':
            textHandler.getTime(request, response);
            break;
        case '/helloJSON':
            jsonHandler.getHelloJSON(request, response);
            break;
        case '/timeJSON':
            jsonHandler.getTimeJSON(request, response)
            break;
        case '/dankmemes':
            imgHandler.getImg(request, response)
            break;
        default:
            htmlHandler.getIndex(request, response);
            break;
    }
};
// Create server and listen
http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`)
