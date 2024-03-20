// Arrays

//var customerNames = [];
//customerNames.push("Sam Smith");
//customerNames.push("Tommy Guns");

//for (let i =0; i < customerNames.length; i++) {
  //  console.log(customerNames[i]);
//}

//for (name of customerNames) {
  //  console.log(name);
//}

//let fullName = "Mary" + " " + "Brown";
//let gradeArray = [100, 79, 80, 90, 100];
//let counter = 1;

//gradeArray.push(85);
//console.log("\n\nStudent: " + fullName);
//console.log("Grades: ");
//for (let grade of gradeArray) {
  //  console.log((counter++) + ": " + grade);
//}

// Functions

//function myFunctions() {
   // for (let i =0; i < 100; i++) {
        //console.log(i);
    //}
//}

//myFunctions();

//function createFullName(firstName, lastName) {
  //  console.log(firstName + ' ' + lastName);
//}

//createFullName('Tom', 'sawyer');

//let fullName = "Mary" + " " + "Brown"; 
//let gradesArray = [100, 79, 80, 90, 100];

//function lowestGrade (gradeBook) {
//if (gradeBook.length > 0) {
//let lowGrade=gradeBook[0];
//for (let grade of gradeBook) {
//if (grade < lowGrade) {
//lowGrade = grade;
//}
//}
//return lowGrade;
//} else {
  //  return 0;
//}
//}

//console.log("\n\nStudent: " + fullName);
//console.log("Grades: ");
//for (let i = 0; i < gradesArray.length; i++) { 
//console.log("\t" + (i+1) + ": " + gradesArray[i]);
//}
//console.log("Evaluation: ");
//console.log("\tLowest Grade is: " + lowestGrade(gradesArray));


//var dvdPlayer = {
    //height: 3, 
    //width: 18,
    //depth: 12,
    //weight: 7,
    //color: 'black',
    //dvdName: 'Mulan',
   // printDVDName: function(property) { dvdName: String
        //console.log(this.dvdName);
  //  }
//};

//console.log(dvdPlayer.depth);
//dvdPlayer.printDVDName();

// intermediate array methods: map, reduce, foreach filter splice

//let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
//let lengths = names.map(function(element) {
  //  return element.length;
//});
//console.log(lengths);

//let sum = lengths.reduce(function(accumulater, currentValue) {
//  return accumulater + currentValue;
//}, 10);
//console.log(sum);

//names.forEach(function(element) {
  //  console.log(element);
//});

//let evens = names.filter(function(element) {
  //  return element.length % 2 == 0;
//});
//console.log(evens);

//let removedElement = names.splice(1, 1);
//console.log(removedElement);