const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 3000;
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res)=>{
    res.send("Server is locally up and running");
});

async function run(){
    try{
        await client.connect();

        await client.db("admin").command({ping: 1});
        console.log("Pinged the server, Server Connection is successfull to MongoDB!");
    }
    finally{

    }
};

run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`local server is running on ${port}`)
});