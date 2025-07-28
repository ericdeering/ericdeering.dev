const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_CONNECTION_URI;
import { ObjectId } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export class DatabaseHandler {

  constructor() {

  }

  static async getProjects() {
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
  
  static async getProject(id: string) {
    try {
      await client.connect();
      const projects = await client.db("projects").collection("projects");
      const dbid = new ObjectId(id)
      const data = await projects.findOne({_id: dbid})
      return data
    } finally {
      await client.close()
    }
  }
}
