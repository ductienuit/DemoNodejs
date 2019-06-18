const express = require('express')
const path = require('path')

const app = new express()
app.use(express.static('public'))

//Send page
app.get('/',(request, respone) => respone.sendFile(path.resolve(__dirname,'index.html')))

//Send json
app.get('/about',(request, respone) => respone.json({
    name:"hehe"
}))


app.listen(3000,()=>{
    console.log('App listening on port 3000')
})