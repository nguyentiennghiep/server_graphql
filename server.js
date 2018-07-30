const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const postSchema = require('./graphql/index');


app.use('/graphql', graphqlHTTP({
  schema: postSchema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
