const twilio = require('twilio');

const accountSid = 'ACb74b7911a48a404024f25ac39d55cab0'; 
const authToken = 'bcbfc0c23bfb1ac3e262679a4a6934c9';  

const client = new twilio(accountSid, authToken);

client.messages.create({
     body: 'Hello from Prakriti',
     to: '+919996931181',  // Texting this number
     from: '+14702382972' // From Twilio number
 })
.then((message) => console.log(message.sid));
