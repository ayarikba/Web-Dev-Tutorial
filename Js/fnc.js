function rand_generator(limit = 40)
{
    var num1 = Math.ceil(Math.random() * limit)
    console.log(num1)
    return (num1)
}

rand_generator()

var num1 = rand_generator(31)
var num2 = Math.ceil(Math.random() * 100)
var num3 = Math.ceil(Math.random() * 49)
var num4 = Math.ceil(Math.random() * 49)
var num5 = Math.ceil(Math.random() * 49)
var num6 = Math.ceil(Math.random() * 49)

console.log("Kolon: " + num1 + " " + num2 +
" " + num3 + " " + num4 + " " + num5 + " " + num6)