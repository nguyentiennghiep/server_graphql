const express = require("express");
const path = require('path');
const graphqlHTTP = require("express-graphql");
const app = express();
const postSchema = require('./graphql/index');
const mongoose = require('mongoose');
const config = require('./config/configDB');
const cors = require('cors');
const bodyParser = require('body-parser')
const formidable = require('formidable');
const router = express.Router();
const cookieParser = require('cookie-parser');
app.use(cors());
// app.use(cookieParser());


// app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(express.static(path.join(__dirname, '.', '/public/')));

// app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', router);

mongoose.Promise = global.Promise;
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', () => { console.log('---FAILED to connect to mongoose') })
db.once('open', () => {
  console.log('+++Connected to mongoose')
});




app.use('/graphql', graphqlHTTP({
  schema: postSchema,
  graphiql: true
}));

router.post('/upload', (request, response, next) => {
  let formidable = require('formidable');
  // parse a file upload
 
  var form = new formidable.IncomingForm();
  form.uploadDir = "./public/";
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024; //10 MB
  form.multiples = false;
  // console.log(form.parse(request));
  form.parse(request, (err, fields, files) => {
    // console.log(files);
    if (err) {
      response.json({
        result: "failed",
        data: {},
        messege: `Cannot upload images.Error is : ${err}`
      });
    }
    if (files['image']) {
      var fileName = files['image'].path.split('\\')[1];
      response.json({
        result: "ok",
        data: fileName,
        messege: "Upload image successfully"
      });
    } else {
      response.json({
        result: "failed",
        data: {},
        numberOfImages: 0,
        messege: "No images to upload !"
      });
    }
  });
});
// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
