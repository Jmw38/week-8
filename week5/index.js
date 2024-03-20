var costOfMilk = 3;

if (costOfMilk < 2) {
    console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, way too expensive!');
}

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

var a = 5;
var b = 6;

if (a == 5) {
    if (b == 6)
        console.log('a is 5 and b is 6.');
}

if (a == 5 && b ==6) {
    console.log('a is 5 and b is 6.');
}

var ageRequiredToDdrive = 16;
var currentAge = 14;

if (currentAge >= ageRequiredToDdrive) {
    console.log('This person can drive');
} else {
    console.log('This persson cannot legally drive');
}

var costOfEggs = 2.12;

var numberOfDozensofEggsToPurchase = 0;

if (costOfEggs > 3) {
    numberOfDozensofEggsToPurchase = 1;
} else if (costOfEggs >2) {
    numberOfDozensofEggsToPurchase = 2;
} else if (costOfEggs > 1){
    numberOfDozensofEggsToPurchase = 3;
} else {
    numberOfDozensofEggsToPurchase = 4;
}

console.log('I will buy' + numberOfDozensofEggsToPurchase + 'dozen eggs.');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is next');

for (let i = 0; i <20; i++) {
    if (i % 2 <= 0) {
        console.log(i);
    }
}

let names = ['sam', 'tom', 'hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names [i]);
}

var cupsOfFlour = 0;

while (cupsOfFlour < 5) {

  console.log('Scooping a cup of flour into the bowl');

  cupsOfFlour += 1;

  console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

}

for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {

    console.log('Scooping a cup of flour into the bowl');
  
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 
}

for (var i = 0; i < 10; i++) {

    console.log(i);
  
  }

  for (var i = 0; i < 100; i++) {
    if (i %3 ==0) {
        console.log(i);
    }
  }

    var loggedIn = false;

    while(!loggedIn) {
        let username = prompt(`username:`);
        let password = prompt(`password`);
    }
    
    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
        loggedIn = true;
      } else {
            alert('Incorrect username or password');
        } 
        
  




