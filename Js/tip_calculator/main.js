
const calculateBill = () => {
    
    let x = document.getElementById('billTotalInput')
    let y = document.getElementById('tipInput')
    let z = document.getElementById('numberOfPeople')
    let t = document.getElementById('perPersonTotal')

    let tip = Number(x.value) * Number(y.value) / 100
    t.innerText = '$' +((tip + Number(x.value)) / Number(z.innerText)) 
 
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    let x = document.getElementById("numberOfPeople")
    x.innerText = Number(x.innerText) + 1
    calculateBill()
  }
  
  const decreasePeople = () => {
    let x = document.getElementById("numberOfPeople")
    
    if (Number(x.innerText) > 1)
    x.innerText = Number(x.innerText)  -1
    calculateBill()
}