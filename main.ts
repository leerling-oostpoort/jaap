function nextLed () {
    if (led_state == 0) {
        basic.clearScreen()
    } else if (led_state == 2) {
        dot.showImage(0)
    } else if (led_state == 3) {
        images.iconImage(IconNames.SmallHeart).showImage(0)
    } else if (led_state == 4) {
        images.iconImage(IconNames.Heart).showImage(0)
    } else if (led_state == 7) {
        images.iconImage(IconNames.SmallHeart).showImage(0)
    } else if (led_state == 8) {
        dot.showImage(0)
    }
    led_state += 1
    if (led_state > 8) {
        led_state = 0
    }
}
function sendBar () {
    basic.showIcon(IconNames.No)
    radio.sendString("Bar")
    basic.showIcon(IconNames.Yes)
}
function prevFib () {
    tmp = fibn
    fibn = fib - fibn
    fib = tmp
}
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        sendFoo()
    } else if (state == 1) {
        prevFib()
    }
})
function showInit () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    state += 1
    if (state >= states) {
        state = 0
    }
})
radio.onReceivedString(function (receivedString) {
    busy = true
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
    if (state == 0) {
        sendBar()
    } else if (state == 1) {
        nextFib()
    }
})
function showFib () {
    basic.showString("" + (fib))
}
function sendFoo () {
    basic.showIcon(IconNames.No)
    radio.sendString("Foo")
    basic.showIcon(IconNames.Yes)
}
function nextFib () {
    tmp = fib
    fib = fib + fibn
    fibn = tmp
}
let tmp = 0
let busy = false
let dot: Image = null
let fibn = 0
let fib = 0
let led_state = 0
let state = 0
let states = 0
radio.setGroup(255)
states = 2
state = 0
led_state = 0
fib = 1
fibn = 0
dot = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
busy = false
showInit()
loops.everyInterval(100, function () {
    if (!(busy)) {
        if (state == 0) {
            nextLed()
        } else if (state == 1) {
            showFib()
        }
    }
})
