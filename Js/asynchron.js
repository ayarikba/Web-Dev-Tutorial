
const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        isReady = false
        isReady ? resolve("ready"):
        reject('no ready') }, 5000)
 })
/*
console.log(promise1
    .then(success => console.log({success}))
    .catch(error => console.log({error})))

console.log("promise :",fetch("https://dog.ceo/api/breeds/image/random")
            .then(x => x.json()
            .then(data => console.log(data))))
*/
const get_dog = async () =>
{
    const url = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

const get_soup = async () =>
{
    let x = {x:0}
    try{
        const x = await promise1
        x.x = 5
        return x
    }
    catch(err)
    {
        x.x = 1
        return x
    }
}

console.log("1")
//get_dog()
get_soup().then(data => console.log(data))
console.log("2")
