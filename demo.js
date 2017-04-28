const fs = require('fs')
const captcha = require('.')

captcha().then((obj) => {
    fs.createWriteStream('a.gif').on('finish', () => console.log(obj.token)).end(obj.buffer)
})
