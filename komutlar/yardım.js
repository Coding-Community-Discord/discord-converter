const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor('#f4abc0')

  .setTitle('<a:prizma:769077061108105226> Yuno Yardım Menüsü <a:prizma:769077061108105226>')

  .addField("> -ç",`**__Belirttiğiniz V11 Kodu v12 yapar.__**`)
  
  .addField("> -çevir",`**__Belirttiğiniz V11 Kodu v12 yapar.__**`)

.addField("> -v11tov12",`**__Belirttiğiniz V11 Kodu v12 yapar.__**`)

  .addField("> -davet",`**__Botumuzun Davet Linkini Atar.__**`)

.addField("> -istatistik",`**__Botun İstatistiklerini Atar.__**`)
  
  
  
  
  .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=760559151930671146&scope=bot&permissions=0)" )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}