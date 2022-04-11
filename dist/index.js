"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var hendlerReqRes_1 = __importDefault(require("./hendler/hendlerReqRes"));
var app = {};
app.config = {
    port: 3000,
};
app.createServer = function () {
    var server = http.createServer(app.hendlerReqRes);
    server.listen(app.config.port, function () {
        console.log("Server is listening on port ".concat(app.config.port));
    });
};
app.hendlerReqRes = hendlerReqRes_1.default.hendlerReqRes;
app.createServer();
