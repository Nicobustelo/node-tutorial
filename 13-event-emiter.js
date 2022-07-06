const EventEmiter = require('events');

const customEmiter = new EventEmiter();

customEmiter.on('response', (name, age) => {
	console.log(`data recieved user ${name} with id: ${age}`);
});
customEmiter.on('response', () => {
	console.log(`some other logic here`);
});

customEmiter.emit('response', 'nico', 20);
