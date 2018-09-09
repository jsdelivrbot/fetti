

import * as express from "express"
import * as path from "path"
import { router } from './routes/routes';

import { scrapper } from "./scrapper";

const PORT = process.env.PORT || 5000;

scrapper.activate();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(router)
  .set('views', path.join(__dirname, '..','views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
