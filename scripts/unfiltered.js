module.exports = function(robot) {
	let message = "world"
	robot.hear(/hello/i, function(res){
		res.send(message);
	});
}