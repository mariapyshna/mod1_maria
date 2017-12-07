console.log("Starting Javascript");

var name = "Maria";

console.log(name);


var myAge =27;
console.log(myAge);

var averageAge = 30;
var ageDiff = myAge - averageAge;

if (ageDiff > 0) {
	console.log("I am older than the average")
}

else if (ageDiff < 0) {
	console.log("I am younger than the average")
}

else {
	console.log("I am as old as the average")
};


// task 4

var classmates = ["Maria", "Jaron", "Konrad", "Schmulik", "Micha"];
console.log(classmates);
classmates.sort();

console.log(classmates[0]);
console.log(classmates[classmates.length -1]);
console.log("###");

for (i = 0; i < classmates.length; i++) { 
    console.log(classmates[i])
};