const ryze1 = require('discord.js')

exports.run = function(client, message, args) {
  const ryze = new ryze1.MessageEmbed() 
                            
.setTitle("Yuno Bot Davet")
.setDescription("** <a:duyuru:764210854723190824> Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=760559151930671146&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/gunrRwxJ9Z)")
.addField("<a:duyuru:764210854723190824> Yuno botumuz her açıdan harika bir botdur.Sürekli yeni özellik eklenen ve gelişen bir v11 to v12 botudur eklemek için yukarıdaki bağlantıyı kullanabilirsiniz.")
  .setColor("RANDOM")

return message.channel.send(ryze)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botuekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};