const express = require('express')
const cors = require('cors')
const routerParser = require('./routes/buildDataParser')
const app = express()

app.use(cors())
app.use(express.json())

app.get('api/', routerParser)
app.get('api/test', (req, res) => {
    res.json({data: "ok"})
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('server started')

})