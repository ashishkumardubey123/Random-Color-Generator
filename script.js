const getcolor =()=>{

  
    // hax code
    const randumnumber =  Math.floor(Math.random()*1677215 ) 

    const randumcode= "#" + randumnumber.toString(16)
    document.body.style.background = randumcode
    document.getElementById("color-code").innerText= randumcode
    navigator.clipboard.writeText(randumcode)
    console.log(randumcode);




}

document.getElementById("btn").addEventListener("click",getcolor)

getcolor()