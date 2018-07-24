import { parsers } from './parsers';

export const scrapper = {
  name: 'fetti',
  activate
};

function activate() {
  parsers.cityGearParser.getProducts();

  console.log('activated');
}