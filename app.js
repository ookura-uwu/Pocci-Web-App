const express = require('express')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://pochi-iqt-20681.firebaseio.com/'
})

const PORT = process.env.PORT || 3000
const app = express()

app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname + '/'))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/scripts'))
app.use(express.static(__dirname + '/views'))

app.use(bodyParser.json())

app.get('/exam-results', function(req, res) {
    res.render('exam-results.html')
})

app.get('/users', function(req, res) {
    res.render('users.html')
})

app.get('/question', function(req, res) {
    res.render('question.html')
})

app.get('/view-questions', function(req, res) {
    res.render('view-questions.html')
})

app.get('/position', function(req, res) {
    res.render('position.html')
})

app.get('/', function (req, res) {
    res.render('index.html')
})

app.post('/users', urlencodedParser, function(req, res) {
    admin
    .auth()
    .deleteUser(req.body.getUid)
    .then(() => {
        return res.redirect('/users')
    })
    .catch((error) => {
        console.log('Delete User Error: ', error)
        return res.redirect('/users')
    })
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})


