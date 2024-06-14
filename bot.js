import { Telegraf } from 'telegraf';

const TOKEN = '7031690916:AAEWkmNdc4fB9nepnjagao_3pTLLLuRpCdY';
const bot = new Telegraf(TOKEN);
const web_link = 'https://x.com/xtontonofficial/';
const chanel_link = 'https://t.me/tontonofficial/';

bot.start((ctx) =>
  ctx.reply(
    `Hello! Welcome to Tonton’s Crypto Adventure 🐕
You are now the guardian of Tonton, the adventurous pup on the TON network.
Which path will you choose? Tap the screen, collect bones, boost your passive income,
and develop your own strategy.
We’ll definitely appreciate your efforts once the token is listed (the dates are coming soon).
Don't forget about your friends — bring them to the game and collect even more rewards together!`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'X',
              url: web_link,
            },
          ],
          [
            {
              text: 'Telegram',
              url: chanel_link,
            },
          ],
        ],
      },
    }
  )
);

bot.launch();
