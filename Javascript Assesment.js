
var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}
 
//In your email, tell me what the answer to this expression would be:
console.log(michelangelo(theNumber) + leonardo(theNumber));

//michelangelo(1)
//value = (1 * 2) => 2
//return 2

// leonardo(1)
// anotherValue = 1
// value = 4
// theNumber = 4 / 2 => 2
// return (4 + 1) => 5

//michelangelo(theNumber) + leonardo(theNumber) => 2 + 5 => 7

theNumber = theNumber * 2;

// theNumber = 4
 
//In your email, tell me what the answer to this expression would be:
console.log((donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));

//donatello(4, 2) - raphael(3, 2, 4)

// value = 2 + 4 => 6
// anotherValue = 6 * 2 => 12
// return 12

//raphael(3,2,4)

// value = 3 * 2 + 4 => 10
// return 4

// donatello(4,2) - raphael(3,2,4) => 12 - 4 => 8

var Splinter = function(a, b){
    var z = a * b;
    var Shredder = [a, b, z];
    return Shredder
}

console.log(Splinter(1,2));

// [1, 2, 2]



