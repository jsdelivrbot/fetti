import { parsers } from './parsers';

export const scrapper = {
  activate,
  parsers,
  name: 'fetti',
};

function activate() {
  parsers.cityGearParser.getProducts();

  console.log('activated');
}