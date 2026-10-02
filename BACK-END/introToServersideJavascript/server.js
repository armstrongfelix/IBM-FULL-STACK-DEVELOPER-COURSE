const http = require("http"); // Import Node.js's built-in HTTP module.

const server = http.createServer((request, response) => { // Create a server and handle each incoming request.
  response.writeHead(200, { "Content-Type": "text/plain" }); // Send a successful response with plain-text content.
  response.end("Hello from the server!"); // Send the message and finish the response.
}); // Finish the request handler and server creation call.

server.listen(8080, () => { // Start listening for requests on port 8080.
  console.log("Server running at http://localhost:8080"); // Display the server address in the terminal.
}); // Finish the startup callback.
