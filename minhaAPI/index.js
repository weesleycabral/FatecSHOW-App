const fatecApi = require('./fatec-api/fatec-api');
const cors = require('cors');
const express = require('express');
const app = express();
let _myAccount;

app.use(cors());
app.use(express.json());


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
  res.set('access-controll-allow-origin', '*')
  res.set('access-controll-allow-methods', '*')
  res.set('access-controll-allow-headers', '*')
});

app.get("/perfil", (req, res) => {
  _myAccount.getProfile().then(perfil => {
    return res.send(perfil);
  }).catch(e => {
    return res.send(`${e}`);
  })
})

app.get("/notas", (req, res) => {
  _myAccount.getPartialGrades().then(notasParciais => {
    return res.send(notasParciais);
  }).catch(e => {
    return res.send(`${e}`);
  })
})

app.get("/disciplinas", (req, res) => {
  _myAccount.getEnrolledDisciplines().then(disciplinas => {
    return res.send(disciplinas);
  }).catch(e => {
    return res.send(`${e}`)
  })
})

app.get("/horarios", (req, res) => {
  _myAccount.getSchedules().then(horarios => {
    return res.send(horarios);
  }).catch(e => {
    return res.send(`${e}`);
  })
})

app.listen(17200);



