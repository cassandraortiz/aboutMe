'use strict';

/* WELCOME MESSAGE - ask for Name */
var userName = prompt("Hello Friend, Welcome to my site!\n What is your name?");

/* (LOOP) FORCE USERNAME */
while ((userName === "") || (userName === null)) {
    userName = prompt("Please, It would be nice to know your name...");
}

/* MESSAGE - start the quiz */
alert("Hi " + userName + "! Welcome to my site. \n\n Let's take a quiz and see how well you know Cassy... \n\n (You can submit answers by typing: yes/no -or- true/false")


/* QUIZ - CORRECT AMOUNT */
var correct = 0

/* QUESTION #1 - Cassy has NEVER seen a Marvel Movie
-----------------------------------------------------*/
function questOne() {
    var question1 = prompt("QUESTION 1:\n Cassy has NEVER seen a Marvel Movie");
    console.log("Question1: Cassy has NEVER seen a Marvel Movie");

    /* While Loop - Forces - NO BLANKS & NO CANCEL */
    while ((question1 === "") || (question1 === null)) {
        question1 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy has NEVER seen a Marvel Movie");
    }

    if ((question1.toLowerCase() === 'yes') || (question1.toLowerCase() === 'true')) {
        console.log("Answer1: WRONG");
        alert("WRONG!\n She's seen ALL the movies!");
    } else if ((question1.toLowerCase() === 'no') || (question1.toLowerCase() === 'false')) {
        console.log("Answer1: CORRECT");
        alert("CORRECT!\n She has seen ALL the Marvel Movies in true Chronilogical Order 2x! (She's obsessed!)");
        correct++;
    } else {
        question1 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy has NEVER seen a Marvel Movie.");
    }
}

questOne();


/* QUESTION #2 - Cassy once won a Car!
----------------------------------------*/

function questTwo() {
    var question2 = prompt("QUESTION 2:\n Cassy once won a Car!");
    console.log("Question2: Cassy once won a Car!");

    while ((question2 === "") || (question2 === null)) {
        question2 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy once won a Car!");
    }

    if ((question2.toLowerCase() === 'yes') || (question2.toLowerCase() === 'true')) {
        console.log("Answer2: CORRECT");
        alert("CORRECT!\n She won a car at her post prom party.  Nothing Special, a used Ford Tempo - but still it was FREE!");
        correct++;
    } else if ((question2.toLowerCase() === 'no') || (question2.toLowerCase() === 'false')) {
        console.log("Answer2: WRONG");
        alert("WRONG!\n She won a car at her post prom party.");
    } else {
        question2 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy once won a Car!");
    }
}

questTwo();

/* QUESTION #3 - Cassy was once arrested for public intoxication in college.
------------------------------------------------------------------------------*/

function questThree() {
    var question3 = prompt("QUESTION 3:\n Cassy was once arrested for public intoxication in college.");
    console.log("Question3: Cassy was once arrested for public intoxication in college.");

    while ((question3 === "") || (question3 === null)) {
        question3 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once arrested for public intoxication in college.");
    }

    if ((question3.toLowerCase() === 'yes') || (question3.toLowerCase() === 'true')) {
        console.log("Answer3: WRONG");
        alert("WRONG!\n She may be a little wild at times, but she has never been arrested!");

    } else if ((question3.toLowerCase() === 'no') || (question3.toLowerCase() === 'false')) {
        console.log("Answer3: CORRECT");
        alert("CORRECT!\n She may be a little wild at times, but she has never been arrested!");
        correct++;
    } else {
        question3 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once arrested for public intoxication in college.");
    }
}

questThree();

/* QUESTION #4 - Cassy was once stuck in an elevator for 4-1/2 hours.
----------------------------------------------------------------------*/

function questFour() {
    var question4 = prompt("QUESTION 4:\n Cassy was once stuck in an elevator for 4-1/2 hours.");
    console.log("Question4: Cassy was once stuck in an elevator for 4-1/2 hours.");

    while ((question4 === "") || (question4 === null)) {
        question4 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once stuck in an elevator for 4-1/2 hours.");
    }

    if ((question4.toLowerCase() === 'yes') || (question4.toLowerCase() === 'true')) {
        console.log("Answer4: WRONG");
        alert("WRONG!\n That has never happened to her.");
    } else if ((question4.toLowerCase() === 'no') || (question4.toLowerCase() === 'false')) {
        console.log("Answer4: CORRECT");
        alert("CORRECT!\n She's had bad days, but not that bad!!");
        correct++;
    } else {
        question4 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once stuck in an elevator for 4-1/2 hours.");
    }
}

questFour();

/* QUESTION #5 - Cassy gets her kicks out of scaring people
-------------------------------------------------------------*/

function questFive() {
    var question5 = prompt("QUESTION 5:\n Cassy gets her kicks out of scaring people.");
    console.log("Question5: Cassy gets her kicks out of scaring people.");

    while ((question5 === "") || (question5 === null)) {
        question5 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy gets her kicks out of scaring people.");
    }

    if ((question5.toLowerCase() === 'yes') || (question5.toLowerCase() === 'true')) {
        console.log("Answer5: CORRECT");
        alert("CORRECT!\n She loves to jump out and scare her husband and kids!");
        correct++;
    } else if ((question5.toLowerCase() === 'no') || (question5.toLowerCase() === 'false')) {
        console.log("Answer5: WRONG");
        alert("WRONG!\n Making people scream brings her joy!");
    } else {
        question5 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy gets her kicks out of scaring people");
    }
}

questFive();


/* QUESTION #6 - Guessing Game
------------------------------------*/

function questSix() {
    var response;
    console.log("Question6: How many cousins does Cassy have?");
    var result;

    /* Loops through attempts (4) */
    for (var x = 1; x < 5; x++) {

        var guess = prompt("QUESTION 6 | ATTEMPT #" + x + " of 4 :\n How many cousins does Cassy have?");

        /* WHile Loop - If answer isNotANumber - Forces Prompt */
        while (isNaN(guess)) {
            guess = prompt("PLEASE ENTER A NUMBER:\n How many first cousins does Cassy have?");
            result = 'User did not guess the answer.'
        }

        if (x === 4) { /* If Number of guesses were reached */
            response = alert("I'm sorry, you have ran out of chances...\n\n The correct answer was 51 first cousins")
        } else if (guess < 20) { /* Guess is WAY too Low */
            response = alert('Your guess is WAY too low...');
        } else if (guess < 51) { /* Guess is still too Low */
            response = alert('You are getting warmer, but still too low...');
        } else if (guess > 51) {/* Guess is too High */
            response = alert('Wow thats a lot, not that many!');
        } else if (guess = 51) { /* Guess is Just Right */
            response = alert("YOU GUESSED IT in " + x + " ATTEMPS!!!\n She has 51 first cousins!!\n\n 28 on mom's side, and 23 on her dad's side.");
            correct++;
            result = 'User guessed the answer in ' + x + 'attempts.' /* Note for Console Log - can be commented out */
            break;
        }
    }

    console.log("Answer6: " + result);
}

questSix();

/* QUESTION #7 - Guessing the Name
------------------------------------*/
var siblings = ["Marky", "Ricky", "Danny", "Terry", "Mikey", "Davey", "Timmy", "Tommy", "Joey", "Robby", "Johnny", "Brian"];
var usersEntries = []; /* Array of User guesses */
var a = 0; /* index of User guess Array */
var nameResult = ""; /* Note for Console Log - can be commented out */

console.log("Index Length: " + siblings.length);

/* Loops through the Number of Attempts Required  (6) */
for (var y = 1; y < 7; y++) {
    console.log("ATTEMPT #" + y);

    var guessName = prompt("QUESTION7 | ATTEMPT #" + y + " of 6 :\n\n I have 12 big brothers, can you guess any of their names?");

    /* Force the user to answer the question - NO Blanks/Cancels */
    while ((guessName === "") || (guessName === null)) {
        guessName = prompt("Please submit an answer: \n Cassy has 12 big brothers, can you guess any of their names?");
    }

    /* Enters Users answer into the usersEntries Array - create console log */
    usersEntries[a] = guessName;
    a++;
    console.log("User Guessed: " + guessName);

    /* If it's the 6th attempt, then alerts User and breaks code */
    if (y === 6) {
        alert("I'm sorry, you have ran out of chances...\n\n The correct answers were: \n" + siblings + "\n\n but really - they are Matt Damon's brothers in Good Will Hunting.\n\nYou guessed: " + usersEntries);
        nameResult = "User Did NOT guess a name correctly."; /* Note for Console Log - can be commented out */
        break;
    }

    var answer = false; /* boolean - set to false before entering loop - to see if answer was found */

    /* Loops through all the siblings to see if it matches */
    for (var i = 0; i < siblings.length; i++) {
        if (guessName.toLowerCase() === siblings[i].toLowerCase()) {
            answer = true;
            break;
        }
    }

    /* If the answer WAS found (true) it alerts user - breaks the loop.  Else - lets know they were wrong */
    if (answer) {
        alert("Wow, You guessed " + guessName + " in " + y + " attempts!!!\n\n Correct answers were: \n" + siblings + "\n\n but ACTUALLY - they are Matt Damon's brothers in Good Will Hunting.\n\nYou guessed: " + usersEntries);
        nameResult = "User Guessed Correctly"; /* Note for Console Log - can be commented out */
        correct++;
        break;
    } else {
        alert("Nope Sorry, that is not correct! You now have: " + (6 - y) + " attempts left!");
    }
}

console.log("Result: " + nameResult);

/* FINAL GRADE
------------------------------------*/
var grade = alert('So ' + userName + ', You know: ' + (correct * (100 / 7)).toFixed(0) + '% about Cassy!! \n You got ' + correct + '/7 correct.')