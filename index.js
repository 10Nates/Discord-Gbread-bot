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
var result = [g1, g2, g3, g4, g5][Math.floor(Math.random() * 5)]

if(command === '!gb') {
    console.log(message.content, '-', message.author.username);
    if(args[0] === 'random') {
        var result = [g1, g2, g3, g4, g5][Math.floor(Math.random() * 5)]
            message.channel.send(result);
          }
  if(args[0] !== 'random') {
           message.channel.send(g1);
       }
   }

if(command === '!gbspam') {
    console.log(message.content, '-', message.author.username);
    if(args[0] === 'random') {
         for (var counter = 1; counter <= args[1]; counter++) {
            var result = [g1, g2, g3, g4, g5][Math.floor(Math.random() * 5)]
               message.channel.send(result);
           }
        }
   if(args[0] !== 'random') {
        for (var counter = 1; counter <= args[0]; counter++) {
            message.channel.send(g1);
        }
    }
}

if(command === '!bb') {
    console.log(message.content, '-', message.author.username);
    message.channel.send('https://imgur.com/a/HqPcu')
}

if(command === '!gbaddlink') {
    console.log(message.content, '-', message.author.username);
    message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=404033618659508244&permissions=19456&scope=bot');
}

if(command === '!gbhelp') {
    console.log(message.content, '-', message.author.username);
    message.channel.send('-"!gb" for one garlic bread, "!gbspam [amount]" for plural amounts of garlic bread.')
    message.channel.send('-"!gb random" for a random image of garlic bread, "!gbspam random [amount]" for multiple random images of garlic bread.')
    message.channel.send('-"!gbaddlink" for a link to add me to a server, !gbhelp for command help.')
    message.channel.send('-"!bb" is the command for :b:arlic :b:read.')
}

if(command === '!gboverride') {
    console.log(message.content, '-', message.author.username)
    if(message.author.id === '186507006008360960') {
        bot.channels.get('403706815151603724').send(args);
    }
    if(message.author.id !== '186507006008360960') {
        if(message.author.id !== '186227992966463488') {
            message.channel.send('Haha screw you lol.');
        }
    }
    if(message.author.id === '186227992966463488') {
        bot.channels.get('403706815151603724').send("&{args} also Owen's a loser lol");
    }
}
    
});


bot.login(process.env.Token);
