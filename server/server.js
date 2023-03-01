const express = require('express')
const next = require('next')
const PORT = 3000
const db = require('../database/connection')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        
        server.post('/test', (req, res) => {
            res.status(200).json('success')
        })
        
        server.put('/test', (req, res) => {
            res.status(200).json('success')
        })

        server.delete('/test', (req, res) => {
            res.status(200).json('success')
        })
        
        server.get("/test", (req, res) => {
            res.status(200).json('success')
        })
        
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, (err) => {
            if (err) throw err
            console.info('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
