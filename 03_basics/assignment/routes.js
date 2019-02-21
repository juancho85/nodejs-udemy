const routes = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text');
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Submit a form</title>
            </head>
            <body>
                <form action="/create-user" method="post">
                    <input type="text" name="username" placeholder="Usename">
                    <button type="submit">Submit</button>
                </form>
            </body>
            </html>
        `
        res.write(html);
        return res.end();
    }

    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Users page</title>
            </head>
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </body>
            </html>
        `
        res.write(html);
        return res.end();
    }

    if(url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', (chunk) => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(`Username is: ${username}`);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            // Quit function execution by returning
            return res.end();
        });
    }
}
module.exports = routes;