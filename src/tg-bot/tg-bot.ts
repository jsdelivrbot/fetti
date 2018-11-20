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


// tgBot.onText(/\/start/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const interval = 30000;
  
//   tgBot.sendMessage(chatId, 'Started monitoring');

//   setInterval(async () => {
//     dataHandler.createPDF('cityGearParser');

//     const pdf = createReadStream('./source/output.pdf');
    
//     if (pdf) {
//       tgBot.sendMessage(chatId, 'Sending docment...');
//       return tgBot.sendDocument(chatId, pdf);
//     }

//     return tgBot.sendMessage(chatId, 'No results');
//   }, interval);
// });

tgBot.onText(/\/start/, (msg, match) => {
  const opts = {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'get',
            callback_data: 'getFile'
          },
          {
            text: 'Monitoring',
            callback_data: 'monitoring'
          }
        ]
      ]
    }
  };

  tgBot.sendMessage(msg.from.id, 'Choose mode:', opts);
});

// tgBot.on(/\/get/, (msg, match) => {

//   tgBot.sendMessage(msg.chat.id, 'hamdling get');
// });


tgBot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  // const opts = {
  //   chat_id: msg.chat.id,
  //   message_id: msg.message_id,
  // };
  // let text;
  console.log(action + 'defef');

  // switch (action) {
  //   case 'getFile':
  //     const opts = {
  //       reply_markup: {
  //         inline_keyboard: [
  //           [
  //             {
  //               text: 'City Gear',
  //               callback_data: 'cityGear'
  //             },
  //             {
  //               text: 'Jimmy Jazz',
  //               callback_data: 'jimmyJazz'
  //             }
  //           ]
  //         ]
  //       }
  //     };
  //     tgBot.sendMessage(msg.chat.id, 'Choose website:', opts);
  //   break;
  //   case 'jimmyJazz':
  //   tgBot.sendMessage(msg.chat.id, 'Jimmy Jazz choosen', opts);
  //   break;
  // }

});
