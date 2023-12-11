const express =  require('express')
const app =  express()
const PORT = 3000
app.get('/',(req,res)=>
             res.send('Hello World! - Gowtham -7376222IT143'))
app.get('/gowtham',(req,res)=>
             res.send('name:Gowtham roll no:7376222IT143'))
app.get('/friends',(req,res)=>
             res.send('name:yuvaraj roll no:7376222IT285 name:Ajay roll no:7376222IT106'))

 app.listen(PORT, () => console.log(
    `7376222IT143 app listning at http://localhost:${PORT}`))  