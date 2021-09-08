const htmlResponses = require('./htmlResponses.js');

const http = require('http');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = `
<html>
<head>
<title>First hosted web page </title>
</head>
<body>
<h1> Our first hosted web page :-) :-) </h1>
</body>
</html>
`;

const onRequest = (request, response) => {
    console.log(request.url);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(htmlResponses.pageOne());
    response.end();
}
// Create server and listen
http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`)
