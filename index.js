import express from 'express'
import http from 'http'
import path from 'path'

const HTTP_PORT = 3001
const httpApp = express()

const httpServer = http.createServer(httpApp)
//Static file declaration
httpApp.use(express.static(path.join(__dirname, 'client/build')));

httpApp.get('/privacyPolicy', (req, res) => res.sendfile(path.join(__dirname, 'PrivacyPolicy.html')))

httpApp.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'client/build/index.html'));
})


console.log('LISTENING ON http ' + HTTP_PORT)
httpServer.listen(HTTP_PORT)
