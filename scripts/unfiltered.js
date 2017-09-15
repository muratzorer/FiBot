module.exports = function(robot) {
	var message = "world"
	robot.hear(/hello/i, function(res){
		res.send(message);
	}
}