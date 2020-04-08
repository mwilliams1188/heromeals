const fetch = require('node-fetch')
const url = 'https://hook.integromat.com/b6p8mibmv629yrxya8u374h1pn8k9nik'

exports.handler = function(event, context, callback) {
  let response = await fetch(url).then(res => res.json())
  console.log(response)

  callback(null, {
    statusCode: 200,
    body: response
  })
}