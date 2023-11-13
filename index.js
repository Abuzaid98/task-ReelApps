let numbers = document.querySelectorAll('.num') 
numbers.forEach(number=>{
    let startVal = 0
    let endVal = Number(number.getAttribute('data-val'))
    let adding = Math.floor(endVal/900)
    let counter = setInterval(()=>{
        startVal += adding
        number.textContent = startVal
        if(startVal >= endVal){
            number.textContent = endVal
            clearInterval(counter)
        }
    },1)
})