const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const postSchema = require('./graphql/index');
const mongoose = require('mongoose');
const config = require('./config/configDB');

mongoose.Promise = global.Promise;
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', () => { console.log('---FAILED to connect to mongoose') })
db.once('open', () => {
    console.log('+++Connected to mongoose')
})

app.use('/graphql', graphqlHTTP({
  schema: postSchema,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
