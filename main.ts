input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Boe!")
    basic.showIcon(IconNames.Yes)
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
radio.setGroup(255)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
