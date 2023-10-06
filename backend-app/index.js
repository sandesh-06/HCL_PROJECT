//establishing connection with mongo
const connectToMongo = require('./db')
connectToMongo().catch(err=>console.log(err))
const cors = require('cors')

//requiring express connection
const express = require('express')
const app = express()
const PORT = 5000


app.use(express.json())
app.use(cors())

  //ROUTES
app.use('/api/auth', require('./routes/auth.js')) //route for authorization
app.use('/api/get-team', require('./routes/getTeam.js')) //to fetch team mates of a manager
app.use('/api/get-project', require('./routes/getProjects.js')) //to fetch projects of a manager
app.use('/api/get-task', require('./routes/Tasks.js')) //to fetch projects of a manager


app.listen(PORT, () => {
  console.log(`project+ listening on port ${PORT}`)
})