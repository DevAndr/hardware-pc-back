const ParsingService = require("./services/ParsingService");
const dirTree = require("directory-tree");
const express = require('express')
const cors = require('cors')
const routerParser = require('./routes/buildDataParser')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routerParser)

app.get('/test', async (req, res) => {
    const data = await ParsingService.parseSite();
    const tree = dirTree(__dirname);
    res.json({data, path: __dirname, tree})
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('server started')
})