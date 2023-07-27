const path=require('path')
const express=require('express')
const hbs=require('hbs')
const gold1=require('./utils/Gold/Gold-1')
const gold2=require('./utils/Gold/Gold-1')
const silver1=require('./utils/Silver/silver-1')
const silver2=require('./utils/Silver/silver-2')

const app=express()
// const publicDirectoryPath= path.join(__dirname, '../')
app.set('view engine', 'hbs')

app.get('/index', (req,res)=> {
    res.render('index', {
        by: 'khushi',
        name: 'khushboo'
    })
})
