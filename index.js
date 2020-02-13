import express from 'express'
import http from 'http'
import https from 'https'
import path from 'path'
import fs from 'fs'

const HTTP_PORT = 80
const HTTPS_PORT = 443
const httpsOptions = {
    key: fs.readFileSync('./security/server.key'),
    cert: fs.readFileSync('./security/server.crt')
}

const app = express()
const httpApp = express()

const httpServer = http.createServer(httpApp)
const httpsSever = https.createServer(httpsOptions, app)

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/privacyPolicy', (req, res) => res.sendfile(path.join(__dirname, 'PrivacyPolicy.html')))

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'client/build/index.html'));
})

httpApp.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
})

console.log('LISTENING ON http ' + HTTP_PORT)
console.log('LISTENING ON https ' + HTTPS_PORT)
httpServer.listen(HTTP_PORT)
httpsSever.listen(HTTPS_PORT)