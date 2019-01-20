//BOTINFO COMMAND
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Buck Bot Information")
  .setColor("#7493e4")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Bot ID", bot.user.id)
  .addField("Created On", bot.user.createdAt)
  .addField("Servers", bot.guilds.size);

  message.channel.send(botembed);

}
module.exports.help = {
  name: "botinfo"
}
