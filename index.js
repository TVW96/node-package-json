// server.js
// Add your code here

//  import http module
import http from 'http';
// import fs module
import fs from 'fs/promises';

//  port and server
const host = 'localhost';
const port = 3000;

let indexFile;

//  request handler "requestListener"
const requestListener = async (req, res) => {
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
        case "/":
            try {
                const indexFile = await fs.readFile("./home.html", "utf8");
                res.writeHead(200);
                res.end(indexFile); // send contents
            } catch (err) {
                console.error(`Could not read home.html file: ${err}`);
                res.writeHead(200);
                res.end("Server error");
            }
            break;
        case "/about":
            try {
                const aboutFile = await fs.readFile("about.html", "utf8"); // Read file with encoding
                res.writeHead(200);
                res.end(aboutFile); // Send the contents
            } catch (err) {
                console.error(`Could not read about.html file: ${err}`);
                res.writeHead(500); // Internal server error
                res.end("Server error");
            }
            break;
        default:
            res.writeHead(404);
            res.end("Resource not found");
    }
};

//  Create the HTTP server
const server = http.createServer(requestListener);

//  Start server
const PORT = process.env.PORT || port;
server.listen(PORT, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});


// Do not delete the following line of code
export default server;