const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_CONNECTION_URI;

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
    await client.close();
  }
}

async function test() {
  try {
    await client.connect();
    const c = await client.db("sample_mflix").collection("comments");
    const f = c.find()
    for await (const doc of f) {
      console.log(doc)
    }
  } finally {
    await client.close();
  }
}

async function getProjects() {
  let result = []
  try {
    await client.connect();
    const projects = await client.db("projects").collection("projects");
    const data = projects.find();
    for await (const project of data) {
      result.push(project)
    } 
  } finally {
    await client.close();
  }
  return result;
}

const Database = {
  run,
  test,
  getProjects,
}

export default Database;
