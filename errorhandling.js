

/////////COMPILE TIME ERROR///////////////
 
// console.log(1
//     that is compile tim error 

// //////////////RUN TIME ERROR////////////

// console.log(x);


////////////HANDLING////////////

try{

    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here")

}
catch(e){
    console.log("I am inside here")
}
finally{
    console.log("I will run evry time")
}

////LETCREATECUSTOMERROR/////////


try{
    console.log(x);
}

catch(err) {
    throw new Error("Bhai pehle declare kro,");
}