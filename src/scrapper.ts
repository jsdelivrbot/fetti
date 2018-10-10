import { dataHandler } from './core';

export const scrapper = {
  activate,
  name: 'fetti',
};

function activate() {
  dataHandler.getAsPDF('cityGearParser');

  console.log('activated');
}