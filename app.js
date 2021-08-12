const morgan = require('morgan');
const express = require('express');
const app = express();
const {addPage, editPage, index, layout, main, userList, userPages, wikipage} = require('./jsmodules');
app.use(morgan);

// const expressStaticFiles = express.static(path.join(__dirname, 'public'))
// app.use(expressStaticFiles);

app.use(express.static(__dirname +
  "/public"));

app.use(express.urlencoded({extended:false}))
//this route will catch all requests, and add req.body to each request; - anonymous

app.get('/', (req,res) => {
  res.send("hello world!")
})

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`user listening ${PORT}`)
})


