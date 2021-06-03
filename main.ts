let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(1, 3)
    if (x == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (x == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
