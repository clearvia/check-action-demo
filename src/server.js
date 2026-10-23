import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 3000);

createServer((request, response) => {
	if (request.url === "/healthz") {
		response.writeHead(200, { "content-type": "text/plain" }).end("ok");
		return;
	}
	response.writeHead(200, { "content-type": "application/json" });
	response.end(JSON.stringify({ hello: "clearvia" }));
}).listen(port);
