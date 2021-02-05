module.exports = async (client) =>{
    const guild = client.guilds.cache.get('804437443621290034');
    setInterval(()=>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('806512531380240424');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    },5000);

}
