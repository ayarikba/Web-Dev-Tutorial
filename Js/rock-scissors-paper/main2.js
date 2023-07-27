let values = document.querySelectorAll(".icon")

const nums =  {"rock":0, "paper":1, "scissors":2}
const vals = [0, 1 ,2]
let player = 0
let comp = 0
values.forEach(x => x.onclick = () =>
{
    let i =  nums[x.value]
    let j = vals[Math.floor((Math.random() * 3))]
    let diff = (i - j + 3) % 3
    if (diff == 0)
        console.log("draw")
    
    else if (diff == 1)
    {
        console.log("you win")
        comp++
    }
    else
    {
        console.log("computer wins")
        player++
    }
    console.log(i)
    console.log(j)
    console.log("Player :", player, " Computer :", comp)
})


const clear_game = document.getElementById("reset")
clear_game.onclick = () => clear_score()

function clear_score()
{
    player = 0
    comp = 0
}
