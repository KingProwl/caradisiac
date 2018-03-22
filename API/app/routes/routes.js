var populate = require('../../populate.js');
var client = require('../../connection.js');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  app.get('/',(req,res) => {
      res.render('../views/index.html');
  });

  app.get('/api/populate', (req, res) => {
    populate.populate();
    res.send("populate completed")
  });

  app.get('/api/cars', (req, res) => {
      client.search({
      index: 'caradisiac',
      type: 'model',
      body: 
      {
        size: 10,
        "sort": [
          { "volume":   { "order": "desc"}}
        ]
      }
    },function (error, response, status) {
        if (error){
          res.send({'search error': error})
        }
        else {
          res.send(response.hits.hits)
        }
    });
  });
};