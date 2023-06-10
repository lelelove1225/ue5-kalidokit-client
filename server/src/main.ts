import express from "express";
import Server from "ws";

// Webサーバの設定
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const wss = new Server.Server({ port: 3001 });

wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('message', (message) => {
        console.log('received: %s', message);
    });
});