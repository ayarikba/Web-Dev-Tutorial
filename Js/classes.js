class bank {
    constructor(initial)
    {
        this.money = initial
    }
    deposit(amount){this.money += Number(amount)
    console.log("Current balance: ",this.money)}
    withdraw(amount){
        if (amount > this.money)
            console.log("this process cant be done")
        else
        {
            this.money -= Number(amount)
            console.log("Current balance:",this.money)
        }
    }
    check(){return this.money}
}

const bank1 = new bank(0)
const input = document.getElementById("input")
const deposit = document.getElementById("deposit")
const withdraw = document.getElementById("withdraw")
const balance = document.getElementById("balance")


function  process (amount, x)
{
    if (x == "deposit")
        bank1.deposit(amount)
    else if (x == "withdraw")
        bank1.withdraw(amount)
    balance.innerText = bank1.check()
}


deposit.onclick = () => process(input.value, "deposit")
withdraw.onclick = () => process(input.value, "withdraw")