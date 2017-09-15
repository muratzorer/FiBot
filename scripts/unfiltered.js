'use strict';
var nodemailer = require('nodemailer');

module.exports = function(robot) {

	robot.hear(/send mail/i, function(res){
		// Generate test SMTP service account from ethereal.email
		// Only needed if you don't have a real mail account for testing
		nodemailer.createTestAccount(function (err, account) {

			// create reusable transporter object using the default SMTP transport
			var transporter = nodemailer.createTransport({
				host: 'smtp.ethereal.email',
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: 'muratz', // generated ethereal user
					pass: 'pass' // generated ethereal password
				}
			});

			// setup email data with unicode symbols
			var mailOptions = {
				from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
				to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
				subject: 'Hello ✔', // Subject line
				text: 'Hello world?', // plain text body
				html: '<b>Hello world?</b>' // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					return res.reply('error');
					//return console.log(error);
				}
				res.reply('Message sent: %s', info.messageId);
				//console.log('Message sent: %s', info.messageId);
				
				// Preview only available when sending through an Ethereal account
				res.reply('Preview URL: %s', nodemailer.getTestMessageUrl(info));
				//console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

				// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
				// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
			});
		});
		
		res.send("Islem Tamam");
	});
}