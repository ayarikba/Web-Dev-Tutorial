const per ={
    name:'Leo',
    shirt:'white',
    age:25,
    marriage:true
}
console.log("name" in per)
console.log("car" in per)
console.log(per.marriage)
console.log(per["shirt"])

per.phone = 32214455
per['address'] = 'Turkey'
console.log(per.phone)


const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt
    }
    const intro = "Hi, my name is " + person.name
    + " color of my shirt is " + person.shirt
    console.log(intro)
    return (person)
}

let x = introducer("ahmet", "mehmet")
console.log(x.name)

const creator = (name, shirt,worth,debt) =>
{
    const person =  
    {
        name:name,
        shirt:shirt,
        worth:worth,
        debt:debt,
    //this is method creation     
  networth: function (){ return this.worth - this.debt}
    }
    return (person)
}
console.log(creator("aaa","bb", 100,50).networth())

