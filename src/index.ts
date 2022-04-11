const http = require("http");
import hendler from "./hendler/hendlerReqRes";

// object type set
let app: {
  config: { port: number };
  createServer: Function;
  hendlerReqRes: Function;
};

app = {
  config: {
    port: 3000,
  },
  createServer: function () {
    const server = http.createServer(this.hendlerReqRes);
    server.listen(this.config.port, () => {
      console.log(`Server is listening on port ${this.config.port}`);
    });
  },
  hendlerReqRes: hendler.hendlerReqRes,
};

app.createServer();
