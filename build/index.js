"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 3000 || parseInt(process.env.PORT);
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/") {
        console.log("you're in the home");
    }
    res.end("Rayhan Hamada");
});
server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
