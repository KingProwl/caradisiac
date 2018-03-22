var client = require('./connection.js');
const jsonfile = require('jsonfile'); // module better than fs to read/write json file

module.exports.populate = function() {
  jsonfile.readFile(__dirname+'/models.json', function(err, res) {
    if(err) console.error(err);
    else {
      res.forEach((model) => {
        setTimeout(() => {
            let volume  = parseInt(model.volume);
            model.volume = volume;
            client.index({
                index: 'caradisiac',
                id: model.uuid,
                type: 'model',
                body: model
          },function(err,resp,status) {
            console.log(resp);
          });
        })
      })
    }
  })
}


