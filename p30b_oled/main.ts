input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Temperatura",
    1
    )
    OLED12864_I2C.showNumber(
    0,
    1,
    input.temperature(),
    1
    )
    OLED12864_I2C.showString(
    4,
    1,
    " graus",
    1
    )
})
OLED12864_I2C.init(60)
basic.forever(function () {
	
})
