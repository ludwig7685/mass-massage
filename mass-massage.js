const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);

    const channelIds = ['1128408303354007644', '1128408303354007645', '1128482896802492566', '1128408303354007648', '1128763249899352155', '1110790197555240970', '1111144267210035210', '1110790199035842560', '1094712736283381760', '1094135879196475404', '1094145293622181958', '1087677589105168464', '1089821658812002345', '1087671685408370798', '1112770929643237549', '1112771182974992466', '1112771234820804738', '1069434413458399284', '1092839699745345588', '1079408866665709599', '1069774980738465932', '1108418759720456284', '1049488985518522418', '1049489340906086520', '1049489965601538159', '1093350568380092496', '1096836051944870091', '1096836108970631208', '1042272998348050562', '1042272911303643156', '968148409544503386', '969333646458753054', '970767391481024582', '969973134730072105', '968172104237318227', '968172170050166824', '968172234931847178', '999874004699598848', '953759231213994094', '999889059176525875', '1008956607754936381', '909279390557405236', '909280682021371935', '909837140911874109', '915448196283650109', '1003497679944437850', '922284337557307434', '909280971721932850', '909282615243178014'];

    const messageContent = `**Express Alts - MFA $7\n\n+Tons of Full access accounts for sale (Cheap)\n+3l names for sale\n+Stacked hypixel for sale\n+Sell us your accounts!\n+Buying accounts open ticket and ping me\n+Buying Minecon\n.gg/RgyzBArR9M\n||@everyone|| ||@here||**`;

    for (const channelId of channelIds) {
        const channel = await client.channels.fetch(channelId);
        if (channel && channel.type === 'GUILD_TEXT') {
            channel.send(messageContent)
                .then(() => console.log(`Message sent to channel ${channelId}`))
                .catch((error) => console.error(`Error sending message to channel ${channelId}: ${error}`));
        } else {
            console.error(`Invalid channel ID or channel type for ${channelId}`);
        }
    }
});

client.login('MTA');
