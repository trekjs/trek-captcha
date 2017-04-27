var captcha = require('.')

captcha().then(function(obj) {
    console.log(obj.token)
})