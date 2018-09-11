import * as fromCore from './core';

import { parsers } from './core/parsers';

export const scrapper = {
  activate,
  name: 'fetti',
};

function activate() {
  fromCore.dataHandler.monitor();
  // parsers.cityGearParser.getAllProducts();

  console.log('activated');
}