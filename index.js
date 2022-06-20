const http = require("http");
const port = 8000;
const server = http.createServer(requestHandle);
const fs = require("fs");

server.listen(port, (err) => {
	if (err) {
		console.log(err);
	}

	console.log("serer is up and running, port", port);
});

function requestHandle(req, res) {
	res.writeHead(200, { "content-type": "text/html" });

	let filepath;

	switch (req.url) {
		case "/":
			filepath = "./index.html";
			break;
		case "/profile":
			filepath = "./profile.html";
			break;
		default:
			filepath = "./404.html";
	}

	fs.readFile(filepath, (err, data) => {
		if (err) {
			console.log({ err });
			res.end("<h1>Error</h1>");
		}

		return res.end(data);
	});
}
