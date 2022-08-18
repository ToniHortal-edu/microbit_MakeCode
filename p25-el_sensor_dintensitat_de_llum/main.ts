input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
})
basic.showIcon(IconNames.Yes)
let strip = robotbit.rgb()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 500) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
