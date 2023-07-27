let x = [1, 2 ,3 ,4 ]

const doublemap = (numbers) =>
{
    return numbers.map(number => number * 2)
}

x.map(num => console.log(num))
let res = x.map(num=> num * 2)
console.log(res)

const filter = (numbers, greater) => 
{
    let x = []
    for (const num of numbers)
        if (num > greater)
            x.push(num)
    return x 
}

console.log(filter([1,2,3,4,5,6], 3))
console.log([1,2,3,4,5,6].filter(num => num > 3))
console.log([1,2,3,4,5,6].filter(num => num > 3 && num < 10))

const actors = [
    {name:"johnny",networth:20},
    {name:"amber",networth:10},
    {name:"leonardo",networth:10},
]
console.log(actors.filter(actor => actor.networth > 10))

console.log(actors.map(actor => actor.name).join(' '))

let nums = [1, 2, 3 , 4]

let result = nums.reduce(function(prev,curr)
   { 
    return prev + curr 
   }
)
console.log(result)


const sum = (a, b) => a+b

result = nums.reduce(sum)
console.log(result)
result = nums.reduce((a, b) => a + b)
console.log(result)
result = actors.reduce((a,b) => a + b.networth,0)
console.log(result)

