import http from 'http';

const PORT = 3000;
const HOST = '127.0.0.1';

const users = [
    { id: 'f5e43e53-d59f-4b0a-9beb-3efe19297e87', name: 'Kerim', age: 27 },
    { id: 'e1622eed-6cde-489a-88ea-377ec4f6f43f', name: 'John', age: 30 },
    { id: '4b239661-d230-440e-b2f9-b7bb8064c468', name: 'Mike', age: 20 }
];

const handleGetRequests = (req, res) => {
    const { url } = req;
    if (url === '/users') {
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    } 
    else if (url.includes('/users')) {
        const userId = url.split('/').pop();
        console.log(userId);
        const user = users.find((user) => user.id === userId);
        if (user) {
            res.statusCode = 200;
            res.end(JSON.stringify(user));
        }
        else {
            res.statusCode = 404;
            res.end('User not found');
        }
    } 
    else {
        res.statusCode = 404;
        res.end('Route in unkown');
    }
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        handleGetRequests(req, res);
    }
    else {
        res.statusCode = 200;
        res.end('Test');
    };
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on port: ${PORT}`);
});




// res.statusCode = 200;
// res.end('Test, everything works!');

// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write('<h1>This is a title!</h1>');

// console.log('Request url: ', req.url);
// console.log('Request method: ', req.method);
