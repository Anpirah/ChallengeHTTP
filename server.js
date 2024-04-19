const http = require('node:http');
const infoData = require('./data.js');

const port = 42069;

const httpServer = http.createServer((req, res) => {
    res.statusCode = 200;
    const htmlData = 
       `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <p>ID: ${infoData.data.id}</p>
            <p>Email: ${infoData.data.email}</p>
            <p>API_KEY: ${infoData.data.apiKey}</p>
        </body>
        </html>`;
    res.end(htmlData);
});

httpServer.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
