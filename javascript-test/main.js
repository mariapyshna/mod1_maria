console.log("Starting Javascript");

var name = "Maria";

console.log(name);


var myAge = 27;
console.log(myAge);

var averageAge = 30;
var ageDiff = myAge - averageAge;

if (ageDiff > 0) {
    console.log("I am older than the average")
} else if (ageDiff < 0) {
    console.log("I am younger than the average")
} else {
    console.log("I am as old as the average")
};


// task 4

var classmates = ["Maria", "Jaron", "Konrad", "Schmulik", "Micha"];
console.log(classmates);
classmates.sort();

console.log(classmates[0]);
console.log(classmates[classmates.length - 1]);
console.log("###");

for (i = 0; i < classmates.length; i++) {
    console.log(classmates[i])
};


console.log('#####');


///// task 5

var classmatesAge = ["27", "32", "33", "25", "29"];


var i = 0;
while (i < classmatesAge.length) {

    if (classmatesAge[i] % 2 == 0) {
	console.log(classmatesAge[i])
    
}	i++;
}

console.log("Print the even number: ")

for (i = 0; i < classmatesAge.length; i++) {
    if (classmatesAge[i] % 2 == 0) {
        console.log(classmatesAge[i]);
    }
};


// task 6



var exampleArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

function sortingNumbersLowest (arr){
	arr.sort(function(a, b){return a - b});
	console.log(arr[0])

};


sortingNumbersLowest(exampleArray);

/////////////



function sortingNumbersHighest (arr){
	arr.sort(function(a, b){return b - a});
	console.log(arr[0])

};


sortingNumbersHighest(exampleArray);



//////////
var exampleArray2 = [3,'I love cookies',67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

function elementOnPosition (arr, i) {
	console.log(arr[i])

};

elementOnPosition (exampleArray2, 1)


///////


function repeatedFinder (arr) {
	// sort
	// store the results into new arr
	for (var i = 0; i < arr.length; i++) {
	 	var x = arr.sort(function(a, b)
		{return b - a});
		if (x == 0) {
			console.log(x)	
		}
	 }
}; 

	// for (var i = 0; i < x.length; i++) {
	// 	x[i]
	// }


		// go through the new arr, find double
		// print double


repeatedFinder (exampleArray2)



///////task 7

var myColors = ["Red", "Green", "White", "Black"];

function joinColors (arr, delimiter) {

	var newArray = arr.join(delimiter);
	console.log(newArray)
}

	joinColors(myColors, ",");
	joinColors(myColors, "//");









