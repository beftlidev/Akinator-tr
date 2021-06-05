const akinator = require("discord-tr-akinator")

client.on("message", async message => {
    if(message.content.startsWith(`g.akinator`)) {
        akinator(message, client);
    }
});
