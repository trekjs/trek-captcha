import test from 'ava'
import captcha from '..'

test('should return an object and include token and buffer', async t => {
  const { token, buffer } = await captcha()

  t.is(token.length, 5)
  t.is(buffer.length, 17646)
})
test('random numbers should be from letters', async t => {
	const { token } = await captcha({letters:'1'})
	console.log(token);
	t.is(token, '11111')
  })
  