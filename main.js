
let attack = 1
let defense  = 1

function start(){
    makeAttacker()
    makeDefender()
    displayDice()
    //displayDice() also gets called whenever the roll button is pressed.  

}

start()


function makeAttacker(){
    document.getElementById("selectorA").innerHTML = `<p>Attacker</p>
        <select name="Attacker" id="Attacker" onchange="setAttackDice(this.value)">
        <option value="1">1</1>
        <option value="2">2</2>
        <option value="3">3</3>
        </select>`
}

function makeDefender(){
    document.getElementById("selectorD").innerHTML = `<p>Defender</p>
        <select name="Defender" id="Defender" onchange="setDefenseDice(this.value)">
        <option value="1">1</1>
        <option value="2">2</2>
        </select>`
}

function setDefenseDice(number){
    defense = number
}
function setAttackDice(number){
   attack = number
}

function displayDice(){
    document.getElementById("dice").readOnly = true;
    document.getElementById("dice").innerHTML = `
    <p> Attackers Dice </p>${stringBuild(attack)}<p> Defenders Dice </p>${stringBuild(defense)}`
}
function stringBuild(number){
    x = number
    y = ""
    while(x > 0){
        y+= `<img src= "dice${Math.ceil(Math.random() * 6)}.jpg">`
        //this builds a number of strings to display dice equal to the number set by the number input
        x--
    }
    return y
}