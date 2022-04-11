"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hendler = {};
hendler.hendlerReqRes = function (req, res) {
    if (req.url === "/") {
        res.write("Home Page");
        res.end();
    }
    else if (req.url === "/about") {
        res.write("About Page");
        res.end();
    }
    else {
        res.write("404 Page");
        res.end();
    }
};
exports.default = hendler;
