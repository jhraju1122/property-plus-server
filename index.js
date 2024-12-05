const express = require('express');
const cors = require('cors');
// require('dotenv').config()
//  const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;


// middewere
app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{
    res.send('property plus server is running ')
})

app.listen(port, () =>{
    console.log(`property plus is running on: ${port}`)
})
