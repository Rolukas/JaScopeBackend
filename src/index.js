// Modules
const express = require('express');
const app = express();
var cors = require('cors')
const routes = require('./routes/index');

// CORS
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
  
    allowedHeaders: [
        'Authorization',
        'Content-Type'
    ],
  };
  


// Middlewares
app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuration
const port = 3002
app.use(routes);


app.listen(port);
console.log(`Server on port: ${port}`);