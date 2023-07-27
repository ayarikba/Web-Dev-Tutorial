const find_biggest_arr = (numbers = []) =>
{
    if (typeof(numbers[0]) == "number")
         return_val = numbers[0]
    else
        return_val=0 
    for (const num of numbers)
        if (num > return_val && typeof(num) == typeof(1))
            return_val = num
    return (return_val)
}

console.log(find_biggest_arr(["aaa",31 ,10 ,2 ,3 , 132,"asdsa","ffwadfaw"]))
function find_biggest(num1, num2, num3)
{
    var ret = 0
     var array = [num1 ,num2 ,num3]
     for (var i= 0;i < 2 ; i++)
        if (ret <  array[i])
            ret = array[i]

    return (ret)
}

var num1 = Math.random() * 10
var num2 = Math.random() * 10
var num3 = Math.random() * 10

console.log(num1 + " " + num2 + " " + num3)
console.log(find_biggest(num1, num2, num3))