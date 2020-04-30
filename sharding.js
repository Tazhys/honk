const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', { token: "token_here" });

manager.spawn(2);
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));