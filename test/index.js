import test from 'ava'
import captcha from '..'

test.cb('should return an object and include token and buffer', function(){
  return captcha().then(function({ token, buffer }) {
    t.is(token.length, 5)
    t.is(buffer.length, 17646)
    t.end
  })
})
