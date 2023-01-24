import http from 'http'

const users = []

const server = http.createServer((req, res) => {

  const { method, url } = req

  if(method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {

    users.push({
      id: 1,
      name: 'Diego',
      email: 'johndoe@doe.com'
    })

    return res.writeHead(201).end('User created')
  }



  res.writeHead(404).end('Not Found')
})

server.listen(3333)