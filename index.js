const Discord = require('discord.js');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS']});

let channelId = "925796661429690379";
let geraId = "733999941302878229";
let d = new Date();


client.on("ready", () => {
    console.log("Roles Bot V2 is locked 'n' loaded.");
});


client.on('guildMemberUpdate', (oldMember, newMember) => {

    let earlyBearsSum = 0;
    let fastBearsSum = 0;
    let punctualBearsSum = 0;
    let totalMembers = 0;

    console.log("id - " + newMember.id);

    const guild = client.guilds.cache.get('891664613844865044');
    guild.members.fetch().then(members => {
        // Loop through every members
        members.forEach(member => {
            // Do whatever you want with the current member
            if (member.roles.cache.has("918910770312536177")) { // early
                earlyBearsSum++;
            } else if (member.roles.cache.has("923258346184773722")) { // fast
                fastBearsSum++;
            } else if (member.roles.cache.has("923258396763914271")) { // punctual
                punctualBearsSum++;
            }
    
        });

        console.log(earlyBearsSum + " - early bears");
        console.log(fastBearsSum + " - fast bears");
        console.log(punctualBearsSum + " - punctual bears");

        totalMembers = earlyBearsSum + fastBearsSum + punctualBearsSum;
        console.log(totalMembers + " - TOTAL bears with roles");

        let checkMember = !check(newMember);

        if (checkMember) {
            console.log("choosing the role to give...")

            if (earlyBearsSum < 500) {
                try {
                    newMember.roles.add("918910770312536177");
                    sendMes(newMember.id, "Early Bear ");
                } catch(err) {
                    console.log(err);
                }

            } else if (fastBearsSum < 500) {
                try {
                    newMember.roles.add("923258346184773722");
                    sendMes(newMember.id, "Fast Bear ");
                } catch(err) {
                    console.log(err);
                }

            } else if (punctualBearsSum < 500) {
                try {
                    newMember.roles.add("923258396763914271");
                    sendMes(newMember.id, "Punctual Bear ");
                } catch(err) {
                    console.log(err);
                }
            }
        }  
        
    });
        
           
});

function check(newMember) {

    let isEarly = newMember.roles.cache.has("918910770312536177");
    console.log("is early - " + isEarly);

    let isFast = newMember.roles.cache.has("923258346184773722");
    console.log("is fast - " + isFast);

    let isPunctual = newMember.roles.cache.has("923258396763914271");
    console.log("is punctual - " + isPunctual);

    let isTeam = newMember.roles.cache.has("917149947760091177");
    console.log("is team - " + isTeam);

    let isGera = newMember.id == geraId;
    console.log("is gera - " + isGera);

    let isBot = newMember.user.bot;
    console.log("is bot - " + isBot);

    let checkRes = isEarly || isFast || isPunctual || isTeam || isGera || isBot;
    console.log(checkRes);

    return checkRes;
    

}




function sendMes(id, roleName) {    
    
    console.log(d.toString());
    console.log("id " + id +  " gets " + roleName + " role");

    let GeneralChannel = client.channels.cache.get(channelId);
    GeneralChannel.send("Let's welcome a new " + roleName + "<@" + id + ">!");

}


client.login("OTI3MjM1ODEwNzYyMzIxOTUw.YdHRpA.9zPTq21vn5kICixvVoHnoPMmC4Y");