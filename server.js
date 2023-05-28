const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())

const todos = [
    {
        id: 45435435435,
        text: "message",
        isEdit: false
    },
    {
        id: 446435435435,
        text: "haris",
        isEdit: false
    },
]

app.post("/todo", (req, res) => {
    console.log(req.body, "body")
})

app.get("/todos", (req, res) => {
    res.send({ todos: todos })
})


app.listen(5000, () => {
    console.log("server is running")
})