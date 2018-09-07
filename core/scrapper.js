const parsers = require('./parsers');

const scrapper = {
  name: 'fetti',
  activate: activate
};

function activate() {

  parsers.cityGearParser.parseMenShoes();
  console.log('activated');
}

module.exports = scrapper;