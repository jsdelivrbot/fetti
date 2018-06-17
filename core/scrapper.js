const parsers = require('./parsers');

const scrapper = {
  name: 'fetti',
  activate: activate
};

const url = "https://www.citygear.com/catalog/shoes/gender/men/page/1/sort-by/price/sort-direction/asc.html";

function activate() {

  parsers.getCityGear();
  console.log('activated');
}

module.exports = scrapper;