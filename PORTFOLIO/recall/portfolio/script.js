// function printValue (){b
let modechange = document.querySelector("#btn");
// let body =document.querySelector("body");
let mode = "light";
btn.addEventListener("click",() => {
    if(mode==="dark"){
        mode="light";
        console.log("light")
    document.querySelector("body").style.backgroundColor="white";
        // body.classList.add("dark");

        
    }else{
            mode="dark";
            console.log("dark");
        document.querySelector("body").style.backgroundColor="black";
            // body.classList.add("light");
        }
    
})