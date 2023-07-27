const gethero = () => 
{
    fetch("https://superheroapi.com/api/6761204470578446/search/batman")
    .then (response => response.json())
    .then(json => console.log(json))
}

gethero()
