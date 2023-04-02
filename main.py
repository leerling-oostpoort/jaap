def on_button_pressed_a():
    basic.show_icon(IconNames.NO)
    radio.send_string("Boe!")
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global state
    state += 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_leds("""
        # # # # #
                # . # . #
                . # # # .
                . . # . .
                . . # . .
    """)
    basic.show_string(receivedString)
    basic.show_leds("""
        # # # # #
                # . # . #
                . # # # .
                . . # . .
                . . # . .
    """)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    basic.show_icon(IconNames.NO)
    radio.send_string("Bla!")
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(255)
basic.show_icon(IconNames.HAPPY)
basic.pause(2000)
for index in range(4):
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
states = 2
state = 0

def on_forever():
    if state % states == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.show_icon(IconNames.HEART)
        basic.pause(200)
        basic.show_icon(IconNames.SMALL_HEART)
    elif state == 1:
        pass
    else:
        pass
basic.forever(on_forever)
