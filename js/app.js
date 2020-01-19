'use strict';
/*

/* WELCOME MESSAGE - ask for Name */
var userName = prompt("Hello Friend, Welcome to my site!\n What is your name?");

/* (LOOP) FORCE USERNAME */
while((userName==="") || (userName === null)){
    userName = prompt("Please, It would be nice to know your name...");
}

/* MESSAGE - start the quiz */
alert("Hi " + userName +"! Welcome to my site. \n\n Let's take a quiz and see how well you know Cassy... \n\n (You can submit answers by typing: yes/no -or- true/false") 


/* QUIZ - CORRECT AMOUNT */
var final = 0

/* QUESTION #1 
-------------------------------*/
var question1 = prompt("QUESTION 1:\n Cassy has NEVER seen a Marvel Movie");
console.log("Question1: Cassy has NEVER seen a Marvel Movie");

while((question1==="") || (question1 === null)){
    question1 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy has NEVER seen a Marvel Movie");
}

if((question1.toLowerCase() ==='yes') || (question1.toLowerCase() ==='true')){
    console.log("Answer1: WRONG");
    alert("WRONG!\n She's seen ALL the movies!");
} else if((question1.toLowerCase() ==='no') || (question1.toLowerCase() ==='false')){
    console.log("Answer1: CORRECT");
    final = final +1;
    alert("CORRECT!\n She has seen ALL the Marvel Movies in true Chronilogical Order 2x! (She's obsessed!)");
} else {
        question1 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy has NEVER seen a Marvel Movie.");
} 

/* QUESTION #2
-------------------------------*/
var question2 = prompt("QUESTION 2:\n Cassy once won a Car!");
console.log("Question2: Cassy once won a Car!");

while((question2==="") || (question2 === null)){
    question2 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy once won a Car!");
}

if((question2.toLowerCase() ==='yes') || (question2.toLowerCase() ==='true')){
    console.log("Answer2: CORRECT");
    alert("CORRECT!\n She won a car at her post prom party.  Nothing Special, a used Ford Tempo - but still it was FREE!");
    final = final +1;
} else if((question2.toLowerCase() ==='no') || (question2.toLowerCase() ==='false')){
    console.log("Answer2: WRONG");
    alert("WRONG!\n She won a car at her post prom party.");
} else {
        question2 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy once won a Car!");
}

/* QUESTION #3
-------------------------------*/
var question3 = prompt("QUESTION 3:\n Cassy was once arrested for public intoxication in college.");
console.log("Question3: Cassy was once arrested for public intoxication in college.");

while((question3==="") || (question3 === null)){
    question3 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once arrested for public intoxication in college.");
}

if((question3.toLowerCase() ==='yes') || (question3.toLowerCase() ==='true')){
    console.log("Answer3: WRONG");
    alert("WRONG!\n She may be a little wild at times, but she has never been arrested!");
    
} else if((question3.toLowerCase() ==='no') || (question3.toLowerCase() ==='false')){
    console.log("Answer3: CORRECT");
    alert("CORRECT!\n She may be a little wild at times, but she has never been arrested!");
    final = final +1;
} else {
        question3 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once arrested for public intoxication in college.");
}

/* QUESTION #4
-------------------------------*/
var question4 = prompt("QUESTION 4:\n Cassy was once stuck in an elevator for 4-1/2 hours.");
console.log("Question4: Cassy was once stuck in an elevator for 4-1/2 hours.");

while((question4==="") || (question4 === null)){
    question4 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once stuck in an elevator for 4-1/2 hours.");
}

if((question4.toLowerCase() ==='yes') || (question4.toLowerCase() ==='true')){
    console.log("Answer4: WRONG");
    alert("WRONG!\n That has never happened to her.");
    
} else if((question4.toLowerCase() ==='no') || (question4.toLowerCase() ==='false')){
    console.log("Answer4: WRONG");
    alert("CORRECT!\n She's had bad days, but not that bad!!");
    final = final +1;
} else {
    question4 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy was once stuck in an elevator for 4-1/2 hours.");
}

/* QUESTION #5
-------------------------------*/
var question5 = prompt("QUESTION 5:\n Cassy gets her kicks out of scaring people.");
console.log("Question5: Cassy gets her kicks out of scaring people.");

while((question5==="") || (question5 === null)){
    question5 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy gets her kicks out of scaring people.");
}

if((question5.toLowerCase() ==='yes') || (question5.toLowerCase() ==='true')){
    console.log("Answer5: CORRECT");
    alert("CORRECT!\n She loves to jump out and scare her husband and kids!");
    final = final +1;
} else if((question5.toLowerCase() ==='no') || (question5.toLowerCase() ==='false')){
    console.log("Answer5: WRONG");
    alert("WRONG!\n Making people scream brings her joy!");
} else {
    question5 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy gets her kicks out of scaring people");
} 


/* QUESTION #6 - Guessing Game
------------------------------------*/
var response;
console.log("Question6: How many cousins does Cassy have?");
var result;

for (var x=1; x<5; x++){

    var guess = prompt("ATTEMPT #" + x + " of 4 :\n How many cousins does Cassy have?");

    while(isNaN(guess)){
        guess = prompt("PLEASE ENTER A NUMBER:\n How many cousins does Cassy have?");
        result = 'User did not guess the answer.'
    }
    if (x===4){
        response = alert("I'm sorry, you have ran out of chances...\n\n The correct answer was 51.")
    } else if (guess<20){
        response = alert('Your guess is WAY too low...');
    } else if (guess <51){
        response = alert('You are getting warmer ...');
    } else if (guess > 51){
        response = alert('Wow thats a lot, not that many!');
    } else if (guess = 51){
        response = alert("YOU GUESSED IT in " + x + " ATTEMPS!!!\n She has 51 first cousins!! 28 on mom's side, and 23 on her dad's side.");
        final = final +1;
        result = 'User guessed the answer in ' + x + 'attempts.'
        break;
    }
}

console.log("Answer6: " + result);


/* QUESTION #7 - Guessing the Name
------------------------------------*/
var siblings = ["Gina", "Jimmy", "Juanita", "Raymond", "Rosie", "Donny", "Eddie", "Mary", "Tanya", "Dee"];
var userGuessNames = [];
var a = 0;
var nameResult = "";

console.log("Index Length: " + siblings.length);

for (var y = 1; y < 7; y++) {
    console.log("ATTEMPT #" + y);
    var guessName = prompt("QUESTION#7\nATTEMPT #" + y + " of 6 :\n My mom has 10 siblings, can you guess any of their names?");

    while ((guessName === "") || (guessName === null)) {
        guessName = prompt("Please submit an answer: \n Cassy's mom has 10 siblings, can you guess any of their names?");
    }

    var usersGuess = guessName;
    var searchName = guessName.toLowerCase();


    if (nameResult !== "") {
        break;
    } else if (y === 6) {
        alert("I'm sorry, you have ran out of chances...\n\n You guess: " + userGuessNames + "\n\n The correct answers were: \n" + siblings);
        nameResult = "User guess a name correctly.";
        break;
    }

    console.log("Attempt#: " + y);
    console.log("User Guessed: " + usersGuess);

    var answer = false;


    for (var i = 0; i < siblings.length; i++) {
        
        var lkupName = siblings[i].toLowerCase();

        if (searchName === lkupName) {
            answer = true;
            break;
        }
    }

    if (answer){
        alert("Wow, You guessed " + usersGuess + " in " + y + " attempts!!!\n\n Here is a list of ALL her siblings:\n" + siblings);
            nameResult = "User Guessed Correctly";
            final = final + 1;
            break;
    } else{
        alert("Nope Sorry, that is not correct! You now have: " + (6 - y) + " attempts left!");
    }
}

console.log("Result: " + nameResult);

/* FINAL GRADE
------------------------------------*/
var grade = alert('So '+ userName + ', You know: ' + (final*(100/7)).toFixed(0) + '% about Cassy!! \n You got ' + final + '/7 correct.')