// import { parsers } from '../parsers';
// import { tgBot } from '../../tg-bot/tg-bot';

class DataHandler {
  monitor(time?: number) {
    // const interval = time || 30000;
    // var products = null;

    // tgBot.onText(/\/start/, (msg, match) => {
    //   const chatId = msg.chat.id;
      
    //   tgBot.sendMessage(chatId, 'Started monitoring');

    //   setInterval(async () => {
    //     products = await parsers.cityGearParser.getProducts();

    //     if (products) {
    //       tgBot.sendDocument(chatId, 'http://www.pdf995.com/samples/pdf.pdf');
    //       // return tgBot.sendMessage(chatId, JSON.stringify(products));
    //     }

    //     return tgBot.sendMessage(chatId, 'No results');
    //   }, interval);
    // });
  }
}

export const dataHandler = new DataHandler();