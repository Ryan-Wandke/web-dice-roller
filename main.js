
let attack = 1
let defense  = 1

function start(){
        makeattacker()
        makedefender()
        displayDice()

}

start()


function makeattacker(){
    document.getElementById("selectorA").innerHTML = `<p>Attacker</p>
                <select name="Attacker" id="Attacker" onchange="setAttackDice(this.value)">
                <option value="1">1</1>
                <option value="2">2</2>
                <option value="3">3</3>
                </select>`
}

function makedefender(){
    document.getElementById("selectorD").innerHTML = `<p>Defender</p>
                <select name="Defender" id="Defender" onchange="setDefenseDice(this.value)">
                <option value="1">1</1>
                <option value="2">2</2>
                </select>`
}

function setDefenseDice(number){
    document.getElementById("selectorD")
    defense = number
}
function setAttackDice(number){
    document.getElementById("selectorA")
   attack = number
}

function displayDice(){
    document.getElementById("dice").innerHTML = `
    <p> Attackers Dice </p>
            ${Stringbuild(attack)}
            <p> Defenders Dice </p>
            ${Stringbuild(defense)}`
}
function Stringbuild(number){
    x = number
    y = ""
    while(x > 0){
        y+= `<img src= "dice${Math.ceil(Math.random() * 6)}.jpg">`
        x--
    }
    return y
}