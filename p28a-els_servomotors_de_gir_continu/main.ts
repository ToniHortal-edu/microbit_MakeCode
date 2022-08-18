input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(5000)
    }
})
basic.forever(function () {
	
})
