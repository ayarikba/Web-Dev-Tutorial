let rock = document.getElementById("rock")
let scissors = document.getElementById("scissors")
let paper = document.getElementById("paper")

function print()
{
    console.log("rock")
}

rock.onclick = print
scissors.onclick = () => console.log("scissors")
paper.onclick = () => console.log("paper")

const squares = document.querySelectorAll(".icon")
console.log(squares[2])

squares.forEach(x => console.log(x.value))

const times_clicked = {"rock":0, "scissors":0, "paper":0}
squares.forEach(square => {
    square.onclick = () => { 
    times_clicked[square.value] += 1
    square.innerText = times_clicked[square.value]
    console.log(square.value)
                           }   
})

function reset ()
{
    
}