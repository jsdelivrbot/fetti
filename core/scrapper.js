const { cityGearParser } = require('./parsers');

const scrapper = {
  name: 'fetti',
  activate
};

function activate() {
  cityGearParser.getProducts();

  console.log('activated');
}

module.exports = scrapper;