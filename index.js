const ParsingService = require("./services/ParsingService");
const express = require('express')
const cors = require('cors')
const routerParser = require('./routes/buildDataParser')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routerParser)

app.get('/test', async (req, res) => {
    const data = await ParsingService.parseSite();

    res.json({data, path: __dirname})
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('server started')
})