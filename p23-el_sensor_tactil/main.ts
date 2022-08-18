let strip = robotbit.rgb()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showIcon(IconNames.Yes)
    }
})
