input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Boe!")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    loop = !(loop)
    n1 = 1
    n2 = 1
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Asleep)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Bla!")
    basic.showIcon(IconNames.Yes)
})
let fib = 0
let n2 = 0
let n1 = 0
let loop = false
radio.setGroup(255)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (!(loop)) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showString("" + (n1))
        fib = n1 + n2
        n1 = n2
        n2 = fib
        basic.pause(1500)
        basic.clearScreen()
        basic.pause(500)
    }
})
