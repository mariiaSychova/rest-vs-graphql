const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const routes = require('./setting/routes')
routes(app)

const port = process.env.PORT || 3500;
 
app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})