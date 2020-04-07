import fetch from 'node-fetch'

export async function post(req, res, next) {
  console.log(req.body)
  let { name, email, description } = req.body
  await fetch(`https://hook.integromat.com/ut14nefh381o3a9g2rp16tiru2tgslyn?name=${name}&email=${email}&description=${description}`)
  res.end(JSON.stringify(req.body))
}