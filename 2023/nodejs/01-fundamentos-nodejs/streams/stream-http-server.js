import http from "http"
import { Transform } from "stream"

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk.toString())
    const inverseNumber = number * -1
    console.log("🚀 ~ inverseNumber", inverseNumber)
    const buf = Buffer.from(String(inverseNumber))
    this.push(buf)
    callback()
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log("🚀 ~ fullStreamContent", fullStreamContent)

  return res.end(fullStreamContent)
})

server.listen(3334)
