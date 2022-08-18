input.onButtonPressed(Button.A, function () {
    led1.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onGesture(Gesture.Shake, function () {
    led1.showColor(neopixel.colors(NeoPixelColors.Black))
    led2.showColor(neopixel.colors(NeoPixelColors.Black))
    led3.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.AB, function () {
    led3.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.B, function () {
    led2.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
let led3: neopixel.Strip = null
let led2: neopixel.Strip = null
let led1: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
led1 = strip.range(0, 4)
led2 = strip.range(4, 3)
led3 = strip.range(7, 3)
basic.forever(function () {
	
})
