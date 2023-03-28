input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Boe!")
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(255)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
