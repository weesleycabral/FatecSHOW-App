const fatecApi = require('./fatec-api/fatec-api')
const myAccount = new fatecApi.Account('560649794SP', 'sotemnota10')

myAccount.login().then(() => {
  return myAccount.getName().then(name => {
    console.log(name)
    // <- 'YOUR FULL NAME WITH CAPSLOCK'
  })
})

