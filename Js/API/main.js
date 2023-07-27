console.log("hello world")

const dogbutton = document.getElementById('button')
const x = document.getElementById('dog')

const getnew = () =>
{
fetch(' https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        x.innerHTML = ('<img src="' + json.message + '" />')
                    })
}

dogbutton.onclick = () => getnew()

getnew()