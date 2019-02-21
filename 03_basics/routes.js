const fs = require('fs');

const requestHandler = (req, res) => {
    // console.log('URL', req.url);
    // console.log('METHOD', req.method);
    // console.log('HEADERS', req.headers);
    // console.log('REQUEST', req);
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        const html = `
            <html>
                <head>
                    <title>Enter message</title>
                </head>
                <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send form</button>
                </form>
                </body>
            </html>
            `
        res.write(html);
        // Quit function execution
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', (chunk) => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // Synchronous write file: Blocks execution until finished
            // fs.writeFileSync('message.txt', message);

            // Async write file
            fs.writeFile('message.txt', message, (error) => {
                // Redirect
                res.statusCode = 302;
                res.setHeader('Location', '/');
                // Quit function execution by returning
                return res.end();
            });

        });

    }

    res.setHeader('Content-Type', 'text/html');
    const html = `
    <html>
        <head>
            <title>Hola desde node</title>
        </head>
        <body>
        <h1>Hola mundo</h1>
        </body>
    </html>
    `
    res.write(html);
    res.end();
}

module.exports = requestHandler;

