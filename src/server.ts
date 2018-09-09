

import * as express from "express"
import * as path from "path"

import { scrapper } from "./scrapper";

const PORT = process.env.PORT || 5000;

scrapper.activate();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname,  '..','views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/products', async (req, res) => {
    const products = await scrapper.parsers.cityGearParser.getProducts();

    console.log(products);
    res.send(products); 
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

