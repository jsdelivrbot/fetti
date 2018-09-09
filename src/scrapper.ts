import * as fromCore from './core';

export const scrapper = {
  activate,
  name: 'fetti',
};

function activate() {
  fromCore.dataHandler.monitor();

  console.log('activated');
}