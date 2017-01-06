var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next){
	res.render('contact', {title: 'Contact'});
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'letspartymoduletwo@gmail.com',
			pass: 'jobellejocelle'
		}
	});

	var mailOptions = {
		from: 'Jobelle San Juan <letspartymoduletwo@outlook.com>',
		to: 'letspartymoduletwo@gmail.com',
		subject: 'Website Message Submission',
		text: 'You have a new submission with the following details...Name: '+req.body.name+ ' Email: '+req.body.email+ ' Type of Event: '+req.body.book+ ' Message: '+req.body.message, 
		html: '<p> You got a new submission with the following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Type of Event: '+req.body.book+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/contact');
		}
	});
});
module.exports = router;