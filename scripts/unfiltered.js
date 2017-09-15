

module.exports = function(robot) {

	robot.hear(/send mail/i, function(res){		
		res.send("world");	
	});
}