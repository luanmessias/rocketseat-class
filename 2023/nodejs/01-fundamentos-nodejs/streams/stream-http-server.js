import http from "http";
import { Transform } from "stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk.toString());
    const inverseNumber = number * -1;
    console.log("🚀 ~ inverseNumber", inverseNumber);
    const buf = Buffer.from(String(inverseNumber));
    this.push(buf);
    callback();
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new InverseNumberStream()).pipe(res);
});

server.listen(3334);
