const enddate ="15 july 2024 00:01"

document.getElementById("end-date").innerText=enddate
const input = document.querySelectorAll("input")

function clock (){
    const end = new Date(enddate)
    const now = new Date() 
    const diff = (end - now)/1000 

    if (diff<0){
        return
    }
   input[0].value=Math.floor(diff/3600/24)
   input[1].value=Math.floor(diff/3600) % 24;
   input[2].value=Math.floor(diff/60)%60;
   input[3].value=Math.floor(diff)%60


}

clock()


setInterval(
    ()=>{
        clock()
    },1000
)