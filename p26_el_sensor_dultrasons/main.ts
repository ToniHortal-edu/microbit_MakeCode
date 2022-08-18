let distancia = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    if (distancia < 10) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
