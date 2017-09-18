var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

module.exports = function(robot) {
    robot.respond(/send da mail/i, function(msg){
		
		var from_email = new helper.Email('test@example.com');
		var to_email = new helper.Email('muratzorer35@gmail.com');
		var subject = 'Hello World from the SendGrid Node.js Library!';
		var content = new helper.Content('text/plain', 'Hello, Email!');
		var mail = new helper.Mail(from_email, subject, to_email, content);
		
		var request = sg.emptyRequest({
		  method: 'POST',
		  path: '/v3/mail/send',
		  body: mail.toJSON(),
		});

		sg.API(request, function(error, response) {
		  console.log(response.statusCode);
		  console.log(response.body);
		  console.log(response.headers);
		  
		  msg.reply(response.statusCode);
		  msg.reply(response.headers);
		  msg.reply(response.body);
		});
		
        msg.reply("mail sent");
    });
}