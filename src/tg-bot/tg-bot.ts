import * as TelegramBot from 'node-telegram-bot-api';
import { config } from './config';

import { parsers } from '../core/parsers';

export const tgBot = new TelegramBot(config.token, { polling: true });

// Matches "/echo [whatever]"
tgBot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  // send back the matched "whatever" to the chat
  tgBot.sendMessage(chatId, resp);
});


tgBot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  const interval = 30000;
  var products = null;
  
  tgBot.sendMessage(chatId, 'Started monitoring');

  setInterval(async () => {
    products = await parsers.cityGearParser.getAllProducts();

    if (products) {
      tgBot.sendDocument(chatId, 'http://www.pdf995.com/samples/pdf.pdf');
      // return tgBot.sendMessage(chatId, JSON.stringify(products));
    }

    return tgBot.sendMessage(chatId, 'No results');
  }, interval);
});
