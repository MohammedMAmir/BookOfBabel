const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use("/public/images", express.static("images"));

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `<h1>Hey Dingus!</h1><img src="/images/kookie.png">`
