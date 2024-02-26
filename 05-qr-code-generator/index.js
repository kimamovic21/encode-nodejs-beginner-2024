import http from 'http';
import QRCode from 'qrcode';

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    const { url, method } = req;
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        const data = JSON.parse(body);
        if (url === '/') {
            res.statusCode = 200;
            res.end('Hello World')
        } else if (url === '/generate' && method === 'POST') {
            QRCode.toDataURL(data.code, (err, url) => {
                res.end(url);
            });
        };
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on port: ${PORT}`)
});
