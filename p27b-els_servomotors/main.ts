input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(180)
})
input.onButtonPressed(Button.AB, function () {
    servos.P2.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(0)
})
servos.P2.setAngle(0)
basic.forever(function () {
	
})
