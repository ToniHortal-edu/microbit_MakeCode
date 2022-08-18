function Crea_llistes () {
    disponibles = [A1, A2, A3]
    ocupats = []
}
function Assigna_encarregat () {
    encarregat = disponibles[randint(0, disponibles.length - 1)]
    basic.showString("" + (encarregat))
    item = disponibles.indexOf(encarregat)
    ocupats.push(item)
    esborrador = disponibles.removeAt(item)
}
input.onButtonPressed(Button.A, function () {
    if (disponibles.length > 0) {
        Assigna_encarregat()
    } else {
        Crea_llistes()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(ocupats.length)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(disponibles.length)
})
let esborrador = ""
let item = 0
let encarregat = ""
let ocupats: number[] = []
let disponibles: string[] = []
let A3 = ""
let A2 = ""
let A1 = ""
A1 = "Arnau"
A2 = "Jordi"
A3 = "Neus"
Crea_llistes()
basic.forever(function () {
	
})
