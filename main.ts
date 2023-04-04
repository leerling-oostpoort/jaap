input.onButtonPressed(Button.A, function () {
    if (state == 0) {
    	
    } else if (state == 1) {
    	
    } else if (state == 2) {
    	
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
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
    	
    } else if (state == 1) {
    	
    } else if (state == 2) {
    	
    }
})
let state = 0
let states = 0
radio.setGroup(255)
states = 3
state = 0
let dot = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
let busy = false
showInit()
loops.everyInterval(100, function () {
    if (!(busy)) {
        if (state == 0) {
        	
        } else if (state == 1) {
        	
        } else if (state == 2) {
        	
        }
    }
})
