import { createReadStream } from 'fs';
import * as TelegramBot from 'node-telegram-bot-api';
import { config } from './config';

import { dataHandler } from '../core/data-handler';

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
  
  tgBot.sendMessage(chatId, 'Started monitoring');

  setInterval(async () => {
    dataHandler.createPDF('cityGearParser');

    const pdf = createReadStream('./source/output.pdf');
    
    if (pdf) {
      tgBot.sendMessage(chatId, 'Sending docment...');
      return tgBot.sendDocument(chatId, pdf);
    }

    return tgBot.sendMessage(chatId, 'No results');
  }, interval);
});
