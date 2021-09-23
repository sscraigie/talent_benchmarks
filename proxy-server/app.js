const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const { get } = require("request");

let token = null;
let time = app.use(cors());
app.use(getToken);

//------------POST Authentication------------
function getToken(req, res, next) {
  if (token == null) {
    const request = require("request");

    const options = {
      method: "POST",
      url: "https://auth.emsicloud.com/connect/token",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      form: {
        client_id: "spencer-craigie",
        client_secret: "iPv3hfkE",
        grant_type: "client_credentials",
        scope: "benchmark",
      },
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      let raw = JSON.parse(body);
      token = raw.access_token;
      console.log(token);
    });
  } else {
    console.log(token);
  }
  next();
}

//--------------Proxy Server -------------
app.get("/:title/:city", async function (req, res) {
  //Get Stuff

  const requ = require("request");

  const opt = {
    method: "POST",
    url: "https://emsiservices.com/benchmark/",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: { title: req.params.title, city: req.params.city },
    json: true,
  };

  requ(opt, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    console.log(typeof body);
    res.send(body);
    return body;
  });
});
app.use(getToken);

app.listen(8000);
