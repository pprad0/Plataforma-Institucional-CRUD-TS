import express from 'express'
import { appDataSource } from './data-source'

appDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
        return res.send("ok")
    })

    app.listen(process.env.PORT)
})

// criar o banco de dados no Beekeeper