const imgPage = `
<html>
    <body>
    <img src="client/spongegar.png" alt="Spongegar">
    </body>
</html>
`;

const getImg = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(imgPage);
    response.end();
}

module.exports.imgPage = imgPage;
module.exports.getImg = getImg;