const array = []
array.push("haha")
array.push(2)
array.push("ahmet")
array.push("mehmet")

const arr = array.slice(0,1)
console.log(array)
console.log(arr)
console.log(array.indexOf("ahmet"))
console.log(array.length)

for (let i= 0 ; i < array.length;i++)
{
    console.log(array[i])
}

for (const val of array)
{
        console.log(val)
}

for (let i = 0; i < 10; i++)
{
 array.push(Math.floor(Math.random()*10))
}

console.log(array)

const sum = (numbers) =>
{
    let result = 0
    for (i = 0; i < numbers.length; i++)
    {

        if (typeof(numbers[i])  == typeof(1))
            result += numbers[i]
        else
            console.log("error on variable type : " + typeof(numbers[i]))
    }
    return {result}
}

console.log(sum([0 , 1 , 2, 3 , 4 , 7 ,"ahmet", "1232", "1"]))