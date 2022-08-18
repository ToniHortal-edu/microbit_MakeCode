input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S1, 90)
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
})
robotbit.Servo(robotbit.Servos.S1, 0)
basic.forever(function () {
	
})
