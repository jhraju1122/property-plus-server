const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

// require('dotenv').config()
//  const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;


// middewere
app.use(cors());
app.use(express.json());

// 
// 

 
const uri = `mongodb+srv://propertyplus:WBNX7qIcvmbSynYL@cluster0.avtmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('property plus server is running ')
})

app.listen(port, () =>{
    console.log(`property plus is running on: ${port}`)
})
