import http from 'http';
import QRCode from 'qrcode';

const PORT = 3000;
const HOST = 'localhost';
let QR_CODE_HISTORY = [];

const server = http.createServer((req, res) => {
    const { url, method } = req;
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        let data;
        if (body) {
            data = JSON.parse(body);
        };
        if (url === '/') {
            res.statusCode = 200;
            res.end('Hello World')
        } 
        else if (url === '/generate' && method === 'POST') {
            QRCode.toDataURL(data.code, (err, url) => {
                QR_CODE_HISTORY.push({ url, name: data?.name });

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(`
                    <div>
                        <h3>QR code za Web stranicu ${data?.name}:</h3>
                        <img src=${url} alt='QR Code' />
                    </div>
                    <h2>QR CODE History: </h2>
                    <div>
                        ${QR_CODE_HISTORY?.map((code) => 
                            `<div>
                                <img src=${code?.url} alt=${code?.name}/>
                                <h5>${code?.name}</h5>
                            </div>`
                        )}
                    </div>
                `);
                res.end();
            });
        };
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on port: ${PORT}`)
});


// https://base64.guru/converter/decode/image
