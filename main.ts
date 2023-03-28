input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Boe!")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    loop = !(loop)
    fib = 1
    n = 0
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        # # # # #
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showString(receivedString)
    basic.showLeds(`
        # # # # #
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Bla!")
    basic.showIcon(IconNames.Yes)
})
let tmp = 0
let n = 0
let fib = 0
let loop = false
radio.setGroup(255)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (!(loop)) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showString("" + (fib))
        tmp = fib
        fib = fib + n
        n = tmp
        basic.pause(1500)
        basic.clearScreen()
        basic.pause(500)
    }
})
