basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Double))
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
