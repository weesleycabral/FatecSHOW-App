const fatecApi = require('./fatec-api/fatec-api');
const cors = require('cors');
const express = require('express');
const app = express();
let _myAccount;
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const myAccount = new fatecApi.Account(req.body.login, req.body.senha);
  _myAccount = myAccount;
  _myAccount.login().then(() => {
    _myAccount.getName().then(name => {
      return res.status(200).send(name);
    }).catch(e => {
      return res.send(`ERROR ${e}`);
    });
  }).catch(e => {
    return res.status(403).send(`Usuario ou senha invalido`);
  })
});

app.get("/perfil", (req, res) => {
  _myAccount.getProfile().then(perfil => {
    return res.send(perfil);
  }).catch(e => {
    return res.send(`${e}`);
  })
})

app.listen(17200);



