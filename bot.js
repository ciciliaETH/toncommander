import { Telegraf } from 'telegraf';

const TOKEN = '7196703719:AAGxH4OZS52PNPiwjhLy2LJ4k9fg46-QUo8';
const bot = new Telegraf(TOKEN);
const web_link = 'https://x.com/commanderton';
const chanel_link = 'https://t.me/commander_ton';

bot.start((ctx) =>
  ctx.reply(
    `Welcome to official commander ton telegram group 🐕
    Commander is meme dog TON chain, We create bot for ton chain, let's join with us and lead the game on ton
    Let's lead the game with commander`,
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
