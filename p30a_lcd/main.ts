input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.ShowString("Temperatura", 1, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 1, 1)
    I2C_LCD1602.ShowString(" graus", 4, 1)
})
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
	
})
