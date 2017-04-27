var captcha = require('.')

captcha().then(function(obj) {
    console.log(obj.token)

    const fs = require('fs')
    fs.createWriteStream('a.gif').on('finish', () => console.log(obj.token)).end(obj.buffer)
})