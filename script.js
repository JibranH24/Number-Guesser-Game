"use strict"







let inputBox=document.getElementById("inputBox")

let saveButton=document.getElementById("save")
saveButton.addEventListener("click",tellsIfHigherOrLowerWithTriesLeft)

let paragraph= document.getElementById("higherOrLowerParagraph")


const computerNumber = Math.floor(Math.random() * 10)+1
let tries=0
console.log(computerNumber)

function tellsIfHigherOrLowerWithTriesLeft(){
    tries+=1
    
    let guess=parseInt(document.getElementById("inputBox").value)

    let direction="Higher"
    
    if (guess>computerNumber && tries!==3 ){//&& guess!==computerNumber){
        direction="Lower"
        paragraph.innerHTML=`${direction} and you've had ${tries} go(es)`
    }
    else if(guess<computerNumber && tries!==3){
        paragraph.innerHTML=`${direction} and you've had ${tries} go(es)`
    }
    else if(guess==computerNumber){
        paragraph.innerHTML=`Correct! You got it right in ${tries} go(es)`
        paragraph.style.color="greenyellow"
        setTimeout(resetGame,2000)
    }
    else if(tries==3){
        paragraph.innerHTML="Better luck next time!"
        paragraph.style.color="red"
        setTimeout(resetGame,2000)
    }
    
}

function resetGame(){
    document.location.reload()
}
    



    
    
    
    
    
    







// tries+=1
// //let guess=parseInt(prompt("Pick an number between 1 and 10")) //make sure you get a real number (not the text "6")

// let guess=parseInt(document.getElementById("inputBox").value)
// // console.log(guess)
//     //how many tries u have left

// let direction="higher"

// if (guess>computerNumber){
//     direction="lower"
//     //paragraph.innerHTML=`${direction} and you have ${triesLeft} tries left`
// }

// else if (guess==computerNumber){
//     paragraph.innerHTML="You Win!"
//     // document.location.reload()//set interval
//     //break
// }
// else if(tries==3){
//     paragraph.innerHTML="Better luck next time!"
//     //break
// }
// //alert(direction+ " and you have " +triesLeft+" tries left")

// paragraph.innerHTML=`${direction} and you've had ${tries} go(es)`
// //if (triesLeft==0)


//}


// while(tries<maxTries){
//     tries+=1
//     let guess=parseInt(prompt("your guess")) //make sure you get a real number (not the text "6")
//     let triesLeft=maxTries-tries //how many tries u have left
//     let direction="higher"
//     if (guess>computerNumber && triesLeft!==0){
//         direction="lower"
//     }

//     else if (guess==computerNumber){
//         alert("you win")
//         break
//     }
//     else if(triesLeft==0){
//         alert("Out of tries")
//         break
//     }
//     alert(direction+ " and you have " +triesLeft+" tries left")


// }




//enter a number into the input box
//when you click the button it should do a function depending on what is in the input box
//maybe let guess =document.getElementById("inputBox").value









