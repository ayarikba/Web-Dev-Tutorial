const add = (a,b) => a+b

const sub = (a,b) => a-b

const div = (a,b) => a/b

const mul = (a,b) => a*b

let a = []

a[0] = add(3,2)
a[1] = sub(3,2)
a[2] = div(3,0)
a[3] = mul(3,2)

console.log(a)