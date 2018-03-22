const {getBrands} = require('node-car-api');
const fs = require('fs');

if (fs.existsSync('./brands.json')) {
  fs.truncate('./brands.json', 0, function() {
  })
}

async function printBrands () {
  const brands = await getBrands();
  try {
    fs.appendFile("./brands.json", JSON.stringify(brands, null, 2), function() {});
  } catch (err) {
    console.log(err);
  }
}

printBrands();