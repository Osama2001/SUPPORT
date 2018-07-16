const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
var moment = require('moment')
const fs = require('fs');
const cooldown = new Set();
var moment = require('moment')
var Canvas = require('canvas');
var jimp = require('jimp');
const prefix = "+";
const embed = new Discord.RichEmbed()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
      console.log('----------------');
    console.log('By Osama_DK');
    console.log('----------------');
});



client.on("ready", () => {
console.log('ready');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'DK',
     details: `للهم أختم بالصالحات أعمالنا`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `في ڪڸ سن? هنآڪ شهر يجعڸني أإڪثر قرباً من ربي {شهر رمضآن}`,
    application_id: '356875570916753438',
     assets: {
        small_image: `462596810729455617`,
        small_text: '2018',
        large_image: `462596810729455617`,
        large_text: `Ramadan Mubarak` }

  }
    });
});

client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "log") //تقدر تغير اسم الشات
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  //By S Codes
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
    client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
  

client.on("channelCreate",  cc => {
  const channel = cc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(cc.guild.name)
  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });

   client.on("channelDelete",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  
  
  
  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});

client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});

client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});

client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});



  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});






 client.on('message', message => {
if(message.content.startsWith(prefix +'sug')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find("name", "『suggestions』")
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","『suggestions』")) return message.channel.send('انشء روم باسم   \`『suggestions』 \`')
   var ThxForSug = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك !`)
.setDescription(`**Your Suggestion** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle(`هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء`)
.setDescription(`Suggestion : **${a8tra7}**`)
		 .setFooter('DK SUPPORT' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Suggestion :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nSuggestion: **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('تم الغاء اقتراحط بنجاح :white_check_mark: ').then(message => {message.delete(4000)})
msg.delete();
})
})
}
});   




client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        var reporter = message.author.id
        const report = message.guild.channels.find("name", "『reports』")
        if(!message.guild.channels.find("name","『reports』")) return message.channel.send('انشء روم باسم   \`『reports』\`')
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report 📃`")
    .setThumbnail(message.author.avatarURL)
    .addField("**- Reported User:**",mUser,true)
    .addField("**- Reported User ID:**",mUser.id,true)
    .addField("**- Reason:**",messageReason,true)
    .addField("**- Channel:**",message.channel,true)
   .setDescription(`**From** : <@${reporter}>`)
		 .setFooter('DK SUPPORT' , client.user.avatarURL)
    
message.channel.send(Rembed)
message.channel.send("``Are you sure you want to send this report???``").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 60000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 60000 });
reaction1.on("collect", r => {
    report.send(Rembed)
    message.reply("**- Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**- Canceled**").then(message => {message.delete(4000)})
msg.delete();
})
})
}
});



 client.on('message', message => {
if(message.content.startsWith(prefix +'news')) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**لا توجد لديك صلاحية** :x: \`\` Manage Messages \`\`");
  const newsroom = message.guild.channels.find("name", "『news』")
     var news = message.content.split(' ').slice(1).join(' ')
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
     newsroom.send(`**${news}**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;


})


  }
});
  
client.on('message', message => {
    if (message.content.startsWith("+bc")) {
    if (message.channel.type === 'dm') return ;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`:false: **| ${message.author.username} you need \`ADMINISTRATOR\` Permission to use this Command !**`)
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR'))return message.channel.send(`**:false: | ${message.author.username}  I require the \`ADMINISTRATOR\` permission to send a brodcast !**`)
    let args = message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('يجب وضع رسالة لأرسال البرودكاست');
    message.reply(`**[ yes | no ] هل أنت متأكد من أنك تريد أرسال البرودكاست ؟ **`).then(() => {
        message.channel.awaitMessages(msg => msg.content == 'yes' || msg.content == "نعم", {
            max: 1,
            time: 30000,
            errors: ['time']
        })
            .then(() => {
             message.channel.send('...انتظر قليلا').then(function(m) {
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓]1`)
             }, 1000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓]2%`)
             }, 3000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓]3%`)
             }, 5000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓]4%`)
             }, 7000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓]15%`)
             }, 9000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓]23%`)
             }, 10000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓]46%`)
             }, 12000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓]59%`)
             }, 14000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓]68%`)
             }, 16000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓]75%`)
             }, 18000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]87%`)
             }, 20000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]95%`)
             }, 21000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]96%`)
             }, 23000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]97%`)
             }, 24000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]98%`)
             }, 25000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]99%`)
             }, 26000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100%`)
             }, 27000)
             setTimeout(function() {
               m.edit(`☑ ${message.guild.memberCount} | تم أرسال الرسالة لـ`)
             }, 29000)
              }); 

                //message.guild.members.filter(m=> m.presence.status !== 'offline').forEach(m => {
                message.guild.members.forEach(m => {
						var bc = new Discord.RichEmbed()
						.setColor('RANDOM')
						.addField('Server :', message.guild.name)
						.addField('Sender :', message.author.username)
						.addField('Message : ', args)
						.setThumbnail(message.guild.iconURL)
						.setAuthor(message.author.username, message.author.avatarURL)
						m.send(bc)                

   
                });
            });
    });
}
 });
 
 
 
  client.on('message', message => {
if(message.content.startsWith(prefix +'apply')) {
            var currentTime = new Date(),
            y = currentTime.getFullYear(),
            m = currentTime.getMonth() + 1,
            d = currentTime.getDate();
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**لا توجد لديك صلاحية** :x: \`\` Manage Messages \`\`");
  const applyroom = message.guild.channels.find("name", "『applications』")
   var mn = message.author.id   
   var apply = message.content.split(' ').slice(1).join(' ')
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
    var apply = new Discord.RichEmbed()
       .setThumbnail(message.author.avatarURL)
   .setTitle(`New Application ♦`)
   .setDescription(`From : __<@${mn}>__\n\nApplication: **${apply}**`)
   .setFooter( "Date : " + d + "-" + m + "-" +y)
    applyroom.send(apply)
   
}  

    
});
 
 
 
 client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})




client.on('message', message => {
    if (message.content.includes('discord.gg')){
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('-kick <@' + message.author.id + '>' + ' Share Servers')
       message.delete() 
       }
    }
   });
   
   client.on('message', async message => {
  if(message.content.startsWith(prefix + "cc")) {
      if(message.author.bot) return;
    if(!message.channel.guild) return;
    await message.channel.send("ارسل اسم الروم").then(e => {
    var filter = m => m.author.id === message.author.id
    var  name = '';
   var time = '';
    var type = '';
    var limit = '';
 
    var types = ["text", "voice", "كتابي", "صوتي"];
    var chaName = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()
 
 
 
e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
var chaTime = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
var chaType = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
var chaLimit = message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()
 
  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت الكامل لا اعده التجديد اسنخدم امر -cc")
    }, Math.floor(time*60000))
    var  chna = message.guild.channels.find("name", "log")
    const embed = new Discord.RichEmbed()
    chna.send({
      embed: embed.setTitle("New TempChat") .setDescription(`Channel Type: ${type}`) .addField("Channel owner", message.author.username) .addField("Channel name", name) .addField("Channel timeout", time) .addField("Channel ID", c.id)
    })
  })
  e.edit("تم انشاء الغرفه استمتع")
 
})
})
})
})
})
 
  }
})
   



  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})

   
   
   client.login(process.env.BOT_TOKEN);
