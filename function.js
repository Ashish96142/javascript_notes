function sayMyName() {
    console.log("Love babbar")
}

sayMyName();

////////////////////////

function printCounting() {
    for(let i=1; i<=100; i++) {
        console.log(i);
    }
}

printCounting();


//////////////////////////


function printNumber(num) {
    console.log("Printing Number:" , num);
}
printNumber(5);


//////////////////////RETURN FUNCTION////////////

function  getSum(a,b,c) {
    let sum = a + b + c;
    return sum;
}

let ans = getSum(1,2,3);
console.log("Printing sum: ", ans);


function getMyName(firstName , lastName){ 
    let fullName = firstname + " " + lastName;
    return fullName;
}

letFullName = getMyName("Ashish", " kumar")
console.log("Full Name" , fullname);