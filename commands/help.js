const discord = require("discord.js");
const { prefix } = require("../settings/config.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()      
  .setAuthor("Bot Info" , bot.user.displayAvatarURL)
  .addField("MUSIC COMMANDS" , `*play or *p url or name\n*pause\n*volume\n*stop\n*skip\n*lyrics song nam`)
  .addField("Extra Commands" , `*ping\n*stats`)
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor(bot.embedColor)
  .setTimestamp();
  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: []
};
