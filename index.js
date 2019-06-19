const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "$"
 
client.login("NTkwODMwMTkyODE4Mzg5MDUz.XQn7sg.1R8JGy2NI3uvdJEMvb8JSQrBoQ4")
 
client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("avec itsMyLovePvP")
 
});
client.on('message', function (message) {
    if (message.content === "info?") {
        message.channel.sendMessage('Ce discord sert à vous faire gagner beaucoup de choses pour plus d information, vas voir le channel information')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "fpv?") {
        message.channel.sendMessage ('FPVserv est la continuité officielle du Projet FPVserv abandonné en 2016-2017Ce serveur a pour but d adapter un univers RPG sur le principe d un serveur PVP/Faction Moddé, des armes exclusives, des quêtes, des donjons, et bien plus! sont donc à votre portée pour une simulation médiéval hors-du-commun ! Le travail qu à dû fournir notre équipe vous laissera plonger dans l univers d FPVserv dans lequel vous pourrez acquérir des métiers, créer votre faction votre maison vos propres armes légendaires accomplir une multitude de quête et bien d autres choses à découvrir https://twitter.com/FPVserv_FR est https://cdn.discordapp.com/attachments/531916374176432179/550801422208466944/LOGO_FPVSERV.png')
        console.log('répond à stf')
    }
})
client.on('message', function (message) {
    if (message.content === "test?") {
        message.channel.sendMessage ('')
        console.log('répond à stf')
    }
})
client.on 
