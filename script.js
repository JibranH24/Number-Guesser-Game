"use strict"

//let myName=prompt("what is your name")
//alert ("hello "+myName)

//make the computer think of a number between 1 and 12

const computerNumber = Math.floor(Math.random() * 12)+1
const maxTries=3
let tries=0


while(tries<maxTries){
    tries+=1
    let guess=parseInt(prompt("your guess")) //make sure you get a real number (not the text "6")
    let triesLeft=maxTries-tries //how many tries u have left
    let direction="higher"
    if (guess>computerNumber){
        direction="lower"
    }
    
    else if (guess==computerNumber){
        alert("you win")
        break
    }
    alert(direction+ " and you have " +triesLeft+" tries left")





    // if ((guess>computerNumber) && (tries=1)) {
    //     alert("Lower and you've had 1 go 2 tries left or youre out") ;
    // }
    // if ((guess>computerNumber) && (tries=2)) {
    //     alert("Lower and youve had 2 goes next one wrong and youre out ") ; 
    // }
    
    // else if((guess<computerNumber) && (tries=1)){
    //     alert("Higher fool and you've had 1 go 2 tries left or youre out"); 
    // }
    // else if((guess<computerNumber) && (tries=2)){
    //     alert("Higher fool and youve had 2 goes next one wrong and youre out  ");
    // }
    // if(maxTries>=3){
    //     alert("you failed");tries=0
        
    // }
    // else {
    //     alert("Congrats"); tries=0
    //     break
    // }
    

}
// the problem may be that it adds 1 on the first one which triggers the second alert














