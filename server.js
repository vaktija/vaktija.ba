const express = require("express");
const compression = require("compression");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const vaktija = require("./src/data/vaktija.json");
const slugify = require("slugify");
const app = express();

const prerender = require("prerender-node").set(
  "prerenderToken",
  process.env.PRERENDER_TOKEN
);
prerender.protocol = 'https';
prerender.crawlerUserAgents.push("googlebot");
prerender.crawlerUserAgents.push('bingbot');
prerender.crawlerUserAgents.push('yandex');

app.use(compression());
app.use(
  prerender.whitelisted([
    "^/$",
    ...vaktija.locations.map(
      location =>
        `^/${slugify(location, {
          replacement: "-",
          remove: null,
          lower: true
        })}$`
    )
  ])
);
app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get(
  vaktija.locations.map(
    location =>
      `^/${slugify(location, {
        replacement: "-",
        remove: null,
        lower: true
      })}$`
  ),
  (req, res) => {
    if (/[A-Z]/.test(req.url)) {
      res.redirect(301, req.url.toLowerCase());
    } else res.sendFile(path.join(__dirname, "build", "index.html"));
  }
);

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found.");
});

app.listen(port);
