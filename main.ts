input.onButtonPressed(Button.A, function () {
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        moverCarril(0)
        basic.pause(2000)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        moverCarril(1)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        moverCarril(2)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        moverCarril(4)
        basic.pause(2000)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        moverCarril(3)
        basic.pause(2000)
    }
})
function moverCarril (carril: number) {
    coordX = carril
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(coordX, index)
        basic.pause(100)
        led.unplot(coordX, index)
    }
}
let coordY = 0
let coordX = 0
let carril = 0
moverCarril(2)
