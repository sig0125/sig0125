const express_box = require('express')
const app = express_box()

app.get('/', function (req, res) {
    res.send("hello world!")
})

app.get('/min', function (req, res) {
    res.send("해냈다~")
})

app.get('/minday1', function (req, res) {
    res.send("200104코딩1일차")
})

// app.get('/', (req, res) => {
//     res.send("hello world!")
// })

app.listen(3000, function () {
    console.log("System is working")
})