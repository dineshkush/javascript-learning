/******************* 01 ******************/            

// String methods

    // trim()
    // toUpperCase()
    // toLowerCase()
    // Slice()

    // let userName = "   Dinesh   ";
    // console.log(userName.length);
    // userName = userName.trim();
    // console.log(userName);
    // console.log(userName.length);



    // let newString = "Dinesh Kushwah";
    // console.log(newString.length);
    // let newStringSlice = newString.slice(0,6);
    // console.log(newStringSlice);

/******************* 01 ******************/


/******************* 02 ******************/

// typeof

// Covert string to number

// 1)
// let age = +"20";
// console.log(typeof age);

// 2)
// let age = "20";
// age = Number(age);
// console.log(typeof age);


// Convert number to string

// 1)
// let age = 20 + "";
// console.log(typeof age);

// 2)
// let age = 20;
// age = String(age);
// console.log(typeof age);

/******************* 02 ******************/


/******************* 03 ******************/

// String concatenation


// let firstName = "Dinesh";
// let lastName = "Kushwah";

// let fullName = firstName + " " + lastName;

// console.log(fullName);


// let firstName = "15";
// let lastName = "20";

// let fullName = +firstName +  +lastName;

// console.log(fullName);


/******************* 03 ******************/


/******************* 04 ******************/

// Template String

// let age = "25";
// let name = "Dinesh";

// let aboutMe = "My name is " + name + " and my age is " + age;

// let aboutMe = `My name is ${name} and my age is ${age}`;

// console.log(aboutMe);

/******************* 04 ******************/


/******************* 05 ******************/

// Ternary operator

// let age = 12;
// let drink;

// if (age <=5 ) {
//     drink = "milk";
// }else {
//     drink = "cold drink";
// }

// console.log(drink);

// let age = 15;
// let drink = age <= 5 ? "milk" : "coffee";

// console.log(drink);

/******************* 05 ******************/


/******************* 06 ******************/

// nested if else

// let winningNumber = 10;

// let userGuess = +prompt("Guess a Number");

// console.log(typeof userGuess, userGuess);

// if (userGuess === winningNumber) {
//     console.log("Your guess is right !!");
// } else {
//     if (userGuess < winningNumber) {
//         console.log("Too Low !!!");
//     }else {
//         console.log("Too High !!!");
//     }
// } 


/******************* 06 ******************/


/******************* 07 ******************/

// if elseif if

// let scienceMarks = 50;

// if (scienceMarks < 10) {
//     console.log("you are fail.")
// }else if (scienceMarks <= 30) {
//     console.log("You are under in marks");
// }else if (scienceMarks <= 60) {
//     console.log("You are 3rd Position");
// }else if (scienceMarks <= 80) {
//     console.log("You are 2nd Position");
// }else if (scienceMarks <= 100) {
//     console.log("You are 3rd Position");
// }else {
//     console.log("not vailid")
// }


/******************* 07 ******************/


/******************* 08 ******************/

//switch

// let month = 5;

// switch (month) {
//     case 0 :
//         console.log ("January");
//         break;
//     case 1 :
//         console.log ("February");
//         break;
//     case 2 :
//         console.log ("March");
//         break;
//     case 3 :
//         console.log ("April");
//         break;
//     case 4 :
//         console.log ("May");
//         break;
//     case 5 :
//         console.log ("June");
//         break;
//     case 6 :
//         console.log ("July");
//         break;
//     case 7 :
//         console.log ("August");
//         break;
//     case 8 :
//         console.log ("September");
//         break;
//     case 9 :
//         console.log ("October");
//         break;
//     case 10 :
//         console.log ("November");
//         break;
//     case 11 :
//         console.log ("December");
//         break;
//     default :
//         console.log("Invailid Month");
// }


/******************* 07 ******************/


/******************* 08 ******************/

// while loop

// let i = 3;
// console.log (i);

// i++
// console.log(i);

// while (i<=10) {
//     i++
//     console.log(i);
// } 

/******************* 08 ******************/


/******************* 09 ******************/

// while loop Example

// let num = 10;
// let total = 0;
// let i = 0;

// while(i<=10) {
//     total = total + i;
//     i++
//     console.log(total);
// }

// console.log(total);


/******************* 09 ******************/

/******************* 10 ******************/

// for loop Example

// for(let i = 25; i<=30; i++) {
//     console.log(i)
// }

// let total = 0;
// let num = 20;

// for(let i = 1; i<=num; i++){
//     total = total + i;
// }
// console.log(total);


/******************* 10 ******************/

/******************* 11 ******************/

// Break Keyword

// for(let i = 1; i<=10; i++) {
//     if (i===3) {
//         break;
//     }
//     console.log(i);
// }

// continue Keyword

// for(let i = 1; i<=10; i++) {
//     if (i===3) {
//         continue;
//     }
//     console.log(i);
// }


/******************* 11 ******************/

/******************* 12 ******************/

// Do While Loop

// let i = 0;

// while (i<=10) {
//     console.log(i);
//     i++
// } 

// do{
//     console.log(i);
//     i++
// }while (i<=10);




const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?

alert(AGE);