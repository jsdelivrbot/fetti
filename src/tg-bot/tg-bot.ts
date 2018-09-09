import * as TelegramBot from 'node-telegram-bot-api';

const token = '687745691:AAHjCkteHe5xsocuV-L4lIN1bcjnjGhrsw4';

export const tgBot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
tgBot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  tgBot.sendMessage(chatId, resp);
});

// // Listen for any kind of message. There are different kinds of
// // messages.
// tgBot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   tgBot.sendMessage(chatId, 'Received your message');
// });
