import { Database } from "./database.js"
import { randomUUID } from "crypto"

const database = new Database()

export const routes = [
  {
    method: "GET",
    url: "/users",
    handler: (req, res) => {
      const users = database.select("users")
      return res.end(JSON.stringify(users))
    },
  },
  {
    method: "POST",
    url: "/users",
    handler: (req, res) => {
      const { name, email } = req.body
      const user = {
        id: randomUUID(),
        name,
        email,
      }
      database.insert("users", user)
      return res.writeHead(201).end("User created")
    },
  },
]
