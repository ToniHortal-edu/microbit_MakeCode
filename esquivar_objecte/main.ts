input.onButtonPressed(Button.A, function () {
    nau.move(-1)
})
function joc () {
    if (game.score() == 5) {
        game.gameOver()
    }
    enemic = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        enemic.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    nau.move(1)
})
let enemic: game.LedSprite = null
let nau: game.LedSprite = null
game.setScore(0)
nau = game.createSprite(2, 4)
basic.forever(function () {
    joc()
    if (enemic.isTouching(nau)) {
        enemic.delete()
        basic.showIcon(IconNames.Sad)
        game.addScore(-1)
        basic.pause(100)
    }
    if (enemic.isTouchingEdge()) {
        enemic.delete()
        game.addScore(1)
    }
})
