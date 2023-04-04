function doDrop () {
    if (stack.length >= 1) {
        stack.pop()
    } else {
        showError()
    }
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    if (button_a) {
        if (button_b) {
            button_b = 0
            showStack()
        } else {
            button_a = control.eventTimestamp() - button_a
            if (button_a < 400000) {
                clickA()
            } else {
                pushA()
            }
        }
    }
    button_a = 0
})
function showOp () {
    ops[op_index].showImage(0)
}
function doSwap () {
    if (stack.length >= 2) {
        value1 = stack.pop()
        value22 = stack.pop()
        stack.push(value1)
        stack.push(value22)
    } else {
        showError()
    }
}
function clickB () {
    if (state == 0) {
        nextNum()
    } else if (state == 1) {
        nextOp()
    }
}
function doOp () {
    if (op_index == 0) {
        doAdd()
    } else if (op_index == 1) {
        doSub()
    } else if (op_index == 2) {
        doMul()
    } else if (op_index == 3) {
        doDiv()
    } else if (op_index == 4) {
        doSquare()
    } else if (op_index == 5) {
        doRoot()
    } else if (op_index == 6) {
        doPower()
    } else if (op_index == 7) {
        doSum()
    } else if (op_index == 8) {
        doSwap()
    } else if (op_index == 9) {
        doDrop()
    } else if (op_index == 10) {
        doClear()
    }
}
function doRoot () {
    if (stack.length >= 1) {
        value2 = stack.pop()
        stack.push(Math.sqrt(value2))
    } else {
        showError()
    }
}
function prevOp () {
    op_index += -1
    if (op_index < 0) {
        op_index = ops.length - 1
    }
}
function nextOp () {
    op_index += 1
    if (op_index >= ops.length) {
        op_index = 0
    }
}
function doDiv () {
    if (stack.length >= 2) {
        value1 = stack.pop()
        value22 = stack.pop()
        stack.push(value22 / value1)
    } else {
        showError()
    }
}
function doSquare () {
    if (stack.length >= 1) {
        value2 = stack.pop()
        stack.push(value2 * value2)
    } else {
        showError()
    }
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    button_a = control.eventTimestamp()
})
function pushA () {
    if (state) {
        state = 0
    } else {
        state = 1
    }
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    if (button_b) {
        if (button_a) {
            button_a = 0
            showStack()
        } else {
            button_b = control.eventTimestamp() - button_b
            if (button_b < 400000) {
                clickB()
            } else {
                pushB()
            }
        }
    }
    button_b = 0
})
function showNum () {
    if (num_init) {
        basic.showNumber(num)
    } else {
        basic.showString("_")
    }
}
function showInit () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    for (let index = 0; index < 3; index++) {
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
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    button_b = control.eventTimestamp()
})
function init () {
    states = 2
    state = 0
    ops = [
    images.createImage(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `),
    images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `),
    images.createImage(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `),
    images.createImage(`
        . . # # .
        . . . . #
        . . . # .
        . . # # #
        . . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . #
        # # . # .
        . # . # .
        . . # . .
        `),
    images.createImage(`
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        # # # # .
        . # . . .
        . . # . .
        . # . . .
        # # # # .
        `),
    images.createImage(`
        . . # . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        `),
    images.createImage(`
        . # # . .
        # . . # .
        # . . . .
        # . . # .
        . # # . .
        `)
    ]
    stack = []
    dot = images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    busy = false
}
function clickA () {
    if (state == 0) {
        prevNum()
    } else if (state == 1) {
        prevOp()
    }
}
function nextNum () {
    num += 1
    num_init = true
}
function doClear () {
    stack = []
}
function pushB () {
    pushNum()
    if (state == 1) {
        doOp()
        state = 0
    }
    showStack()
}
function doSum () {
    value2 = 0
    while (stack.length > 0) {
        value2 += stack.pop()
    }
    stack.push(value2)
}
function doAdd () {
    if (stack.length >= 2) {
        value1 = stack.pop()
        value22 = stack.pop()
        stack.push(value22 + value1)
    } else {
        showError()
    }
}
function pushNum () {
    if (num_init) {
        stack.push(num)
        num = 0
        num_init = false
    }
}
function doSub () {
    if (stack.length >= 2) {
        value1 = stack.pop()
        value22 = stack.pop()
        stack.push(value22 - value1)
    } else {
        showError()
    }
}
function doMul () {
    if (stack.length >= 2) {
        value1 = stack.pop()
        value22 = stack.pop()
        stack.push(value22 * value1)
    } else {
        showError()
    }
}
function prevNum () {
    num += -1
    num_init = true
}
function showError () {
    basic.showIcon(IconNames.Sad)
}
function doPower () {
    if (stack.length >= 2) {
        value1 = stack.pop()
        value22 = stack.pop()
        stack.push(value22 ** value1)
    } else {
        showError()
    }
}
function showStack () {
    busy = true
    for (let value of stack) {
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(value)
    }
    busy = false
}
let busy = false
let dot: Image = null
let states = 0
let num = 0
let num_init = false
let value2 = 0
let state = 0
let value22 = 0
let value1 = 0
let op_index = 0
let ops: Image[] = []
let button_b = 0
let button_a = 0
let stack: number[] = []
init()
showInit()
loops.everyInterval(100, function () {
    if (!(busy)) {
        if (state == 0) {
            showNum()
        } else if (state == 1) {
            showOp()
        }
    }
})
