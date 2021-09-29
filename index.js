const express = require('express')
const app = express()

// App.Use
app.use(express.static('public'));

// App.Get
app.get('/', function (req, res) {
    res.send(public / index.html)
});

app.listen(process.env.PORT || 8080)
console.log("🚀 Server listening on port 8080");