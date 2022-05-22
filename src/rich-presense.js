const client = require('discord-rich-presence')('976863727443910766');
 
client.updatePresence({
  state: 'Online',
  startTimestamp: Date.now(),
  instance: true,
});