const http = require("http");
const url = require("url");
let obj = { name: "karthik", city: "hyd" };
const server = http.createServer((req, res) => {
  //   console.log(req.method)
  //   console.log(req.url)
  const pursedurl = url.parse(req.url,true);
  const tickets= pursedurl.query.tickets;
  console.log(pursedurl)

  if (req.method == "GET") {
    if (pursedurl.pathname == "/bahubali") {
      res.writeHead(200, "okay", { "content-type": "application/json" });
      res.write(JSON.stringify({ "movie name": "bahubali", screen: "1" , numoftickets: tickets }));
      res.end();
    } else if (pursedurl.pathname == "/baby") {
      res.writeHead(200, "okay", { "content-type": "application/json" });
      res.write(JSON.stringify({ "movie name": "baby", screen: "2",numoftickets: tickets }));
      res.end();
    } else if (pursedurl.pathname == "/baba") {
      res.writeHead(200, "okay", { "content-type": "application/json" });
      res.write(JSON.stringify({ "movie name": "baba", screen: "3",numoftickets: tickets }));
      res.end();
    } else {
      res.writeHead(402, "file not found",{"content-type":"application/json"});
      res.write(JSON.stringify({ "movie name": "N/A", screen: "N/A" }));
      res.end();
    }
  } else {
    res.writeHead(402, "file not found");
    res.end("invalid request");
  }
});

server.listen("3001", () => {
  console.log("server running");
});
