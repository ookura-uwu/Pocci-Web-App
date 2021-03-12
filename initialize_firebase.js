var admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://pochi-iqt-20681.firebaseio.com/'
})