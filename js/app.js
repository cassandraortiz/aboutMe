'use strict';

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
var question3 = prompt("QUESTION 3:\n Cassy has more than 50 first cousins");
console.log("Question3: Cassy has more than 50 first cousins");

while((question3==="") || (question3 === null)){
    question3 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy has more than 50 first cousins.");
}

if((question3.toLowerCase() ==='yes') || (question3.toLowerCase() ==='true')){
    console.log("Answer3: CORRECT");
    alert("CORRECT!\n She has 51 first cousins!! 28 on mom's side, and 23 on her dad's side.");
    final = final +1;
} else if((question3.toLowerCase() ==='no') || (question3.toLowerCase() ==='false')){
    console.log("Answer3: WRONG");
    alert("WRONG!\n She has 51 first cousins!!");
} else {
        question3 = prompt("Please answer 'yes/no' or 'true/false'\n Cassy has more than 50 first cousins");
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

var grade = alert('So '+ userName + ', You know: ' + (final*20) + '% about Cassy!! \n You got ' + final + '/5 correct.');