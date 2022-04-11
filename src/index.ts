const http = require("http");
import hendler from "./hendler/hendlerReqRes";

const app:any = {};

app.config = {
  port: 3000,
};

app.createServer = () => {
  const server = http.createServer(app.hendlerReqRes);
  server.listen(app.config.port, () => {
    console.log(`Server is listening on port ${app.config.port}`);
  });
};

app.hendlerReqRes = hendler.hendlerReqRes;

app.createServer();
