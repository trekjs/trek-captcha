import test from 'ava'
import captcha from '..'

test('should return an object and include token and buffer', function(t){
  return captcha().then(function(obj) {
    t.is(obj.token.length, 5)
    t.is(obj.buffer.length, 17646)
  })
})


test('should return an object and include token and buffer', function(t){
  return captcha(6).then(function(obj) {
    t.is(obj.token.length, 6)
    t.is(obj.buffer.length, 17646)
  })
})
