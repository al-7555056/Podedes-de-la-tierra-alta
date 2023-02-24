let a_presionado = 0
let Tipo_de_podedes = 0
input.onButtonPressed(Button.A, function () {
    a_presionado = 1
    Tipo_de_podedes = randint(1, 4)
    if (Tipo_de_podedes == 1) {
        basic.showLeds(`
            . . # # .
            # . . . .
            . . # . .
            . # # # .
            # # # . #
            `)
    } else if (Tipo_de_podedes == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . #
            . . . . #
            # # # # .
            `)
    } else if (Tipo_de_podedes == 3) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (a_presionado == 1) {
        basic.showString("El poder de")
        if (Tipo_de_podedes == 1) {
            basic.showString("fuego")
        } else if (Tipo_de_podedes == 2) {
            basic.showString("viento")
        } else if (Tipo_de_podedes == 3) {
            basic.showString("escudo")
        } else {
            basic.showString("agua")
        }
    }
    a_presionado = 0
})
