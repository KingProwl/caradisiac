const {getModels} = require('node-car-api');
const fs = require('fs');
var brands = require('./brands.json');

const modelCars = [];

if (fs.existsSync('./models.json')) {
  fs.truncate('./models.json', 0, function() {
  })
}

async function printModels () {

  for (var i = 0; i<brands.length; i++)
  {
    const models = await getModels(brands[i]);
    models.forEach(models => modelCars.push(models))

    try {
          fs.writeFile("./models.json", JSON.stringify(modelCars, null, 2), function() {});
          console.log('Copy in models.json');
        } catch (err) {
          console.log(err);
        }

  }
}

printModels();