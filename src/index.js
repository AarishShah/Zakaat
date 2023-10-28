// D:\InstalledSoftwares\mongodb\mongodb\bin\mongod.exe --dbpath=D:\InstalledSoftwares\mongodb\mongodb-data
// C:\'Program Files'\MongoDB\Server\7.0\bin\mongod.exe --dbpath C:\khushi\mongodb-data

const express = require('express')
const path = require('path');
require('./db/mongoose') // to connect mongose to the database

const userRouter = require('./routers/user')
const zakatRouter = require('./routers/zakat')

const app = express()
const port = process.env.PORT || 5000 // to make our app work on heroku

app.use(express.json()) // configuring express to automatically parse the incoming json so we can use it as an oject
app.use(userRouter) // to register our router
app.use(zakatRouter)


// app.use(express.static(path.join(__dirname, '../public')));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, '../view'));



app.listen
    (port, () => { console.log('Server is up on port ' + port); })