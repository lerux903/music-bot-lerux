const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Gives you the botlists of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#F0EAD6")
    .setTitle("Here is a list for all Bot-Lists this Bot is on!")
   .addField("top.gg", "https://top.gg/bot/887744575408603178")
    .addField("Matrixbots","https://www.matrixbots.xyz/bots/887744575408603178/")
    .addField("bots.ondiscord","https://bots.ondiscord.xyz/bots/887744575408603178")
    .addField("discordbotlist","https://discordbotlist.com/bots/Gohan")
    .addField("discordextremelist","https://discordextremelist.xyz/en-US/bots/887744575408603178")
    );

  }
}