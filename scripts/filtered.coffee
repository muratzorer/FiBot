module.exports = (robot) ->

   robot.hear /cmon/i, (res) ->
     res.send "Goals? cmon? #{res.message.text}? WE DON'T NEED NO STINKIN BADGERS"