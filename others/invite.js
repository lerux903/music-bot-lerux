const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Gohan? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Gohan','https://cdn.discordapp.com/attachments/885620613950099549/889479692904710214/unknown.png')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Gohan to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=887800930244894762&permissions=49572160&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};