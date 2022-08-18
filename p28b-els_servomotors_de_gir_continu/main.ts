input.onButtonPressed(Button.A, function () {
    while (true) {
        servos.P1.run(100)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(5000)
        servos.P1.run(-100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(5000)
        servos.P1.run(0)
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
