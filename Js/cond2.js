
var num = 300
var bool = false
while (bool == false)
{
    var num1 = Math.ceil(Math.random() * 10)
    var num2 = Math.ceil(Math.random() * 10)
    var num3 = Math.ceil(Math.random() * 10)    
    if (num1 == num2 && num2 == num3)
        bool = true
    num--
}
console.log(num)