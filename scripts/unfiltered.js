module.exports = function(robot) {
    robot.respond(/send mail/i, function(msg){
        msg.reply("world");
    });
}