import * as express from 'express';

import * as fromCore from '../core';

export const router = express.Router();

router
  .get('/', (req, res) => res.render('pages/index'))
  .get('/city-gear', async (req, res) => {
    const products = await fromCore.parsers.cityGearParser.getProducts();
    
    res.send(products); 
  })

