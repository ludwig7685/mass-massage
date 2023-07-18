const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);

    leaveServers();
});

client.login('MTA');

async function leaveServers() {
    const guilds = client.guilds.cache;

    if (guilds.size === 1) {
        console.log('Only one server remaining. Exiting...');
        process.exit(0);
    }

    guilds.forEach(async (guild) => {
        await guild.leave();
        console.log(`Left server: ${guild.name}`);
    });

    setTimeout(() => {
        leaveServers();
    }, 2000); // Delay between iterations (2 seconds in this case)
}
