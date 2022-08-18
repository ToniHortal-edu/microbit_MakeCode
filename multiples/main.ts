input.onButtonPressed(Button.A, function () {
    if (NÚMERO % MÚLTIPLE == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(2000)
})
input.onGesture(Gesture.Shake, function () {
    MÚLTIPLE += 1
    basic.showNumber(MÚLTIPLE)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(200)
    NÚMERO = randint(0, 100)
    basic.showNumber(NÚMERO)
})
input.onButtonPressed(Button.B, function () {
    if (NÚMERO % MÚLTIPLE != 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(2000)
})
let NÚMERO = 0
let MÚLTIPLE = 0
basic.showString("MULTIPLE")
MÚLTIPLE = 0
basic.forever(function () {
	
})
