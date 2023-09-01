// Get readline-sync package
const readlineSync = require("readline-sync");

// Questions List
const questionsList = [
  {
    question: "What is My Name ?",
    options: ["Aman", "Aniket", "Raman"],
    answer: "aman"
  },
  {
    question: "Which is My Favourite Programming Language ?",
    options: ["C", "JS", "JAVA"],
    answer: "js"
  },
  {
    question: "Who is My Favourite Actor ?",
    options: ["Shahrukh Khan", "Salman Khan", "Hrithik Roshan"],
    answer: "shahrukh khan"
  },
  {
    question: "What I Like Most?",
    options: ["Eating", "Sleeping", "Playing"],
    answer: "sleeping"
  },
  {
    question: "What is My Favourite Junk Food ?",
    options: ["Burger", "Noodles", "Samosa"],
    answer: "samosa"
  }

];

// User's Score
let userScore = 0;



// // function to display question, take answer and return the answer
function askQuesAndTakeAns(question, options, answer) {

  // Show question 
  console.log("\n🔴 Question :- " + question + "\n");


  console.log("👇...Options...👇\n");
  // Show Options
  for (let i = 0; i < options.length; i++) {
    console.log("▶️" + "  " + options[i]);
  }

  // Take Answer and return
  return readlineSync.question("\n🟢 Answer :- ");

}

// // function to Evaluate Answer whether the answer is Right or Wrong. Also Increment or Decrement score based on result
function evaluateAnsAndShowResult(correctAnswer, userAnswer) {

  // Display userAnswer
  console.log("\n👉 Your Answer => " + userAnswer);

  // Check Right Or Wrong
  if (correctAnswer.toLowerCase() == userAnswer.toLowerCase()) {
    console.log("\n✅ You Are Right");
    userScore++;
  } else {
    console.log("\n❎ You Are Wrong");
    console.log("\n🟩 Correct Answer => " + correctAnswer);
    userScore--;
  }

  // Display User's score
  console.log("\n📋 Your Current Score => " + userScore);
}



// // function to show question and result
function showQuesAndResult(question, options, answer) {
  console.log("\n................................................................")
  const userAnswer = askQuesAndTakeAns(question, options, answer);
  evaluateAnsAndShowResult(answer, userAnswer);
  console.log("\n................................................................")
}


// function to display final result
function finalResult(){
  
  // Clear Console
  console.clear();

  // Display final Result and score
  if (userScore > 0) {
    console.log("\n🤩🤩🍰🍰 Yupee !!! You Won the Game......");
  } else {
    console.log("\n🤦🤦🥺🥺 Ooo !!! You Loss the Game......");
  }

  // Final Score
  console.log("\n📋 Your Final Score => " + userScore);

  console.log("\n............................................................\n");

  // Prompt to Play Again
  console.log("\n😃 Do You Want to Play Again");
  console.log("\n👉 Yes - Press Y or y key\n👉 No - Press Any Key");

// Take Action Based On Choice
  const userChoice = readlineSync.question("\n👉 Enter Your Choice => ");

  if (userChoice.toLowerCase() == 'y')
    startGameAndPlay();
  else
    console.log("\n🙂 Its Ok, As You Wish.........");
}


// Function to Start Game and Play
function startGameAndPlay() {

  // Reset Score
  userScore = 0;
  
  // Clear Console
  console.clear();

  // Display initial score
  console.log("\n📋 Your Score Before Starting the Game => " + userScore);

  // Game Started
  console.log("\n>>>>>>>>>> 🔰 Game Started !! 👍 Best of Luck <<<<<<<<<<<<\n")

  // Ask All Questions One by One
  for (let i = 0; i < questionsList.length; i++) {
    const currentQuestion = questionsList[i];
    showQuesAndResult(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
  }

  // Display Final Result
  finalResult();
}

/////////////////////////////// Output Start From Here //////////////////////////////////


// Take User's name and welcome them
const userName = readlineSync.question("\n🖐️  Hi Buddy !, What is Your Name => ");
const welcomeMessage = "\n>>>>>>> 😍 Welcome " + userName + " <<<<<<<<";
console.log(welcomeMessage);


// Prompt to play Game
const userChoice = readlineSync.question("\nHey " + userName + ", Do You Want to Play A Quiz Game About Me.\n\n👉 YES - Press Y or y key\n👉 NO - Press Any Key\n\n👉 Enter Your Choice => ");


// Take Action Based On Choice
if (userChoice.toLowerCase() == 'y') {
  startGameAndPlay();
} else {
  console.log("\n🙂 Its Ok, As You Wish.........");
}