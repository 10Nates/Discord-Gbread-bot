//cd documents\code\Discord Bots\Discord Gbread bot, then node .
const Discord = require('discord.js');
const bot = new Discord.Client(); 

bot.on('message', (message) => {
const args = message.content.slice().trim().split(/ +/g);
const command = args.shift().toLowerCase();
const g1 = 'http://www.everydadgourmet.com/wp-content/uploads/2014/09/Garlic-Bread.png '
const g2 = 'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/3d1f0c52-d997-4ca4-acbb-8cb61c1abd86.jpg '
const g3 = 'http://emerils.com/sites/default/files/10_16_08_0034_f.jpg '
const g4 = 'https://pbs.twimg.com/media/DB_ZWF4W0AIuFR0.jpg:large '
const g5 = 'https://i.imgur.com/gVmXJvT.jpg '
const g6 = "https://www.wikihow.com/images/e/ee/Make-Julia's-Bay-Leaf-Garlic-Bread-Step-5.jpg "
const g7 = 'https://bit.ly/2IF9DPY '
const g8 = 'https://i.imgur.com/aL662.jpg '
const g9 = 'https://i.redd.it/fstuty889k101.png '
const g10 = 'https://cmt.azureedge.net/media/orig_the_best_garlic_bread_youll_ever_eat_20180412031508568668savni2.jpg '
const g11 = 'https://i.redditmedia.com/tR23giGVcS1qh3lcHj8ShfBkv1-4_cqhaLak-XNZ-uY.jpg?s=c2880479ce7d42ecc3dd5da0029845d3 '
const gbdog = 'https://i.imgur.com/Z8Laxh1.png '
const bb = 'https://imgur.com/a/HqPcu '
/*Copy+Paste for all: g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11 */

if(command === '!gb') {
    console.log(message.author.username, '-', message.content);
    if(args[0] === 'random') {
        var result = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11][Math.floor(Math.random() * 11)]
        message.channel.send(result);
    } else {
        message.channel.send(g1);
    }
   }

if(command === '!gbspam') {
    console.log(message.author.username, '-', message.content);
    if (args[0] > 200) {
        message.channel.send('Max Amount is 200');
        args[0] = 200;
    }
    if(args[0] === 'random') {
         for (var counter = 1; counter <= args[1]; counter++) {
            var result = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11][Math.floor(Math.random() * 11)]
            message.channel.send(result);
           }
    }else{
        for (var counter = 1; counter <= args[0]; counter++) {
            message.channel.send(g1);
        }
    }
}

if(command === '!bb') {
    console.log(message.author.username, '-', message.content);
    message.channel.send(bb)
}

if(command === '!gbaddlink') {
    console.log(message.author.username, '-', message.content);
    message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=404033618659508244&permissions=19456&scope=bot');
}

if(command === '!gbhelp') {
    console.log(message.author.username, '-', message.content);
    message.channel.send('-"!gb" for one garlic bread, "!gbspam [amount]" for plural amounts of garlic bread.')
    message.channel.send('-"!gb random" for a random image of garlic bread, "!gbspam random [amount]" for multiple random images of garlic bread.')
    message.channel.send('-"!gbaddlink" for a link to add me to a server, "!gbhelp" for command help.')
    message.channel.send('-"!bb" is the command for :b:arlic :b:read, "!gbdog" is for a doggo with some garlic bread.')
}

if(command === '!gboverride') {
    console.log(message.author.username, '-', message.content);
    if(message.author.id === '186507006008360960') {
        msovrdpre = message.content.replace(/!gboverride/g,'');
        msovrd = msovrdpre.replace(args[0],''); 
        bot.channels.get(args[0]).send(msovrd);
    } else {
        message.author.send('Haha screw you lol.');
    }
}
    
if(command === '!gbdog') {
    console.log(message.author.username, '-', message.content);
    message.channel.send(gbdog);
}

});


bot.login(process.env.Token);
