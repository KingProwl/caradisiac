const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

async function print_brands () {
  const brands = await getBrands();

  console.log(brands);
}

print_brands();



async function print_models () {
  const models = await getModels('PEUGEOT');

  console.log(models);
}

print_models();