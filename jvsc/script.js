// alert("helo")
console.log("hello world")

// one (manupilating html)

document.querySelector("h1").innerHTML="gay"

// 2nd way 


var a=document.querySelector("h1")
a.innerHTML="nigga"



// two manupilating css

a.style.backgroundColor="yellow"
a.style.color="black"




// event listener
// most important

a.addEventListener("click",function(){
    a.innerHTML="sonam"
    a.style.backgroundColor="black"
    a.style.color="white"
})



    // bulb

     flag=0;

    var b=document.querySelector("#bulb")
    var c=document.querySelector("#on")
    c.addEventListener("click",function(){
        if(flag==0){
            b.style.backgroundColor="white"
            
            flag=1

        }else{
            b.style.backgroundColor="yellow"
            
            
            flag=0
        }

    })





