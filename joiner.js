const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);

    const inviteLinks = [
        'https://discord.com/invite/sNJNKzrfxt',
        'https://discord.com/invite/e5xMm8YgCn',
        'https://discord.com/invite/knhExemRfS',
        'https://discord.com/invite/xMUbvM8RSg',
        'https://discord.com/invite/bPeT5M9PMj',
        'https://discord.com/invite/TagSmsWPVP',
        'https://discord.com/invite/7wpQVVwmw5',
        'https://discord.com/invite/GB3bwTeTBy',
        'https://discord.com/invite/6Th8ACc8nc',
        'https://discord.com/invite/czAqEw5eq4',
        'https://discord.com/invite/BZRkHJuEZs',
        'https://discord.com/invite/rdBbdc6',
        'https://discord.com/invite/ZzYsqZGahb',
        'https://discord.com/invite/kKTA6Cez3U',
        'https://discord.com/invite/Yb4BUGv4NY',
        'https://discord.com/invite/NzYHw4DNzD',
        'https://discord.com/invite/9v7YVJV92u',
        'https://discord.com/invite/QJDDy2NsuY',
        'https://discord.com/invite/gpDcZfF',
        'https://discord.com/invite/azGNCtF',
        'https://discord.com/invite/bqcGVXHqCn',
        'https://discord.com/invite/nmc3xQE',
        'https://discord.com/invite/fy8bdxtjE7',
        'https://discord.com/invite/h667wmAyM3'
        
        
    ];

    for (const inviteLink of inviteLinks) {
        try {
            const inviteCode = inviteLink.split('/').pop();
            await client.acceptInvite(inviteCode);
            console.log(`Joined server using invite link: ${inviteLink}`);
        } catch (error) {
            console.error(`Error joining server with invite link: ${inviteLink}\n${error}`);
        }
    }

    console.log('All servers joined successfully.');
});

client.login('MTA');
