let sum= 0
function incrementFunc(){
    sum +=1
    document.getElementById("display-txt").textContent = sum
}

function decrementFunc(){
    sum -=1
    document.getElementById("display-txt").textContent = sum
}

function save(){
    localStorage.setItem("score", JSON.stringify(sum))
}

document.getElementById("display-txt").textContent = localStorage.getItem("score")

function reset(){
    localStorage.clear()
    document.getElementById("display-txt").textContent=0
}
