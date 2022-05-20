const express = require('express');
const cors = require('cors')
const jwtToken = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

const app = express();

//midleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.fla9g.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try {
    await client.connect();

    const collection = client.db("doctor").collection("doctorData");
    const bookingCollection = client.db("doctor").collection("booking");
    const userCollection = client.db("doctor").collection("user");

    app.get('/service', async (req, res) => {
      res.send(await collection.find({}).toArray())
    })

    app.post('/booking', async (req, res) => {

      const booking = req.body;


      if (await bookingCollection.findOne({ modelId: booking.modelId })) {
        res.send({ succes: false, booking })
      } else {
        await bookingCollection.insertOne(booking);

        res.send({ succes: true, booking })

      }
    })

    const verfiyJWT = async (req, res, next) => {
      const token = req.headers.authentication;
      if(!token){
       return res.status(401).send({message: 'unAthentication flied'})
      }
      
      jwtToken.verify(token.split(' ')[1], 'masud_rana', function(err, decoded) {
        if(err){
          return res.status(403).send({message: 'forbidden request flied'})
        }
        res.decoded = decoded;
        next()
      });

    }

    app.put('/user/:email', async (req, res) => {
      const email = req.params.email;

      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          email
        },
      };

      const result = await userCollection.updateOne(filter, updateDoc, options);
      const token = jwtToken.sign({ email: email }, "masud_rana", { expiresIn: '1h' });

      res.send({result,token })

    })

    app.get("/appointments/:email", verfiyJWT ,async (req, res) =>{
      const email = req.params.email;

      const query = { email: email };
      const cursor = await bookingCollection.find(query).toArray();
      res.send(cursor)
    })


  } finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('server is runnig')
})





app.listen(port, () => console.log('app listen port 5000'))