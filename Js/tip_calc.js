
function totalbillcalc()
{
    let tip = Number(prompt("% of tip ?"))
    let food = Number(prompt("How much was food ?"))
    let tip_val = tip*food/100
    let bill = tip_val + food
    return (bill)
}

console.log(totalbillcalc())


//alert(tip) displays in screen