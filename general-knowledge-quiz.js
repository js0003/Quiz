const questionData = [{
  question: 'In which part of your body would you find the cruciate ligament?',
  answer1: 'Knee',
  answer2: 'Leg',
  answer3: 'John Paul Jones',
  answer4: 'We don\'t care nigga',
  correctAnswer: 'Knee'
 },
 {
  question: 'Which European country has won the most Nobel prizes?',
  answer1: 'United Kingdom',
  answer2: 'France',
  answer3: 'Germany',
  answer4: 'Sweden',
  correctAnswer: 'United Kingdom'
 },
 {
  question: 'What is the current world record for the fastest 100m sprint, completed by Usain Bolt in Berlin in 2009?',
  answer1: '9.68s',
  answer2: '9.58s',
  answer3: '9.52s',
  answer4: '9.62s',
  correctAnswer: '9.58s'
 },                                                                                                                                                                                                                           
 {
  question: 'The decision for post WW2 Germany to be split into several zones to be controlled by the Allies, was made at which conference?',
  answer1: 'Potsdam',
  answer2: 'Paris',
  answer3: 'Tehran',
  answer4: 'Yalta',
  correctAnswer: 'Yalta'
 },
 {
  question: 'What country has the highest life expectancy in the world?' ,
  answer1: 'Monaco' ,
  answer2: 'Hong Kong',
  answer3: 'Singapore',
  answer4: 'Luxembourg',
  correctAnswer: 'Monaco'
 },
 {
  question: 'How many dots appear on a dice?' ,
  answer1: '36' ,
  answer2: '40',
  answer3: '42',
  answer4: '38',
  correctAnswer: '42'
 },
 {
  question: 'Where is the strongest muscle in the human body located?' ,
  answer1: 'Glutes',
  answer2: 'Jaw',
  answer3: 'Spine',
  answer4: 'Thigh',
  correctAnswer: 'Jaw'
 },
 {
  question: 'What is the capital of New Zealand?',
  answer1: 'Auckland',
  answer2: 'Wellington' ,
  answer3: 'Hamilton',
  answer4: 'Christchurch',
  correctAnswer: 'Wellington'
 },
 {
  question: 'Which national football team has reached the most World Cup finals?',
  answer1: 'Brazil',
  answer2: 'Argentina',
  answer3: 'Italy',
  answer4: 'Germany',
  correctAnswer: 'Germany'
 },
  {
    question: 'In what country was Elon Musk born?',
    answer1: 'Canada' ,
    answer2: 'USA' ,
    answer3: 'Australia',
    answer4: 'South Africa',
    correctAnswer: 'South Africa'
 },
 {
  question: 'What is acrophobia a fear of?',
  answer1: 'Heights',
  answer2: 'New food',
  answer3: 'Germs',
  answer4: 'Holes',
  correctAnswer: 'Heights'
 },
 {
  question: 'What percentage of crime do African-Americans commit despite making up only 13% of the population?',
  answer1: '9%',
  answer2: '22%',
  answer3: '38%',
  answer4: '50%',
  correctAnswer: '50%'
 },

]

let i = 0
let quizScore = 0
const answerElement1 = document.getElementById('answer1');
const answerElement2 = document.getElementById('answer2');
const answerElement3 = document.getElementById('answer3');
const answerElement4 = document.getElementById('answer4');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.querySelector('.js-question');
const scoreElement = document.getElementById('score-btn');
let currentItem = 0




function beginGame() {

  questionContainerElement.classList.remove('hide'); // removes hide class - stops this from being hidden
   // removes hide class from next button
  scoreElement.classList.remove('hide');// removes hide from the score button
  startButton.classList.add('hide'); // hides the initial start button once the game has started
  nextButton.addEventListener('click', nextQuestion);
  
  currentItem = 0;
  questionElement.innerHTML = `Question ${currentItem + 1}:   ${questionData[currentItem].question}`
  answerElement1.innerHTML = `${questionData[currentItem].answer1}`
  answerElement2.innerHTML = `${questionData[currentItem].answer2}`
  answerElement3.innerHTML = `${questionData[currentItem].answer3}`
  answerElement4.innerHTML = `${questionData[currentItem].answer4}`
  scoreElement.innerHTML = `Score: ${quizScore}/${currentItem}`

  


  }




function nextQuestion() {
  timesAnswered = 0;
  answerElement1.classList.remove('btn-correct');
  answerElement1.classList.remove('btn-wrong');
  answerElement2.classList.remove('btn-correct');
  answerElement2.classList.remove('btn-wrong');
  answerElement3.classList.remove('btn-correct');
  answerElement3.classList.remove('btn-wrong');
  answerElement4.classList.remove('btn-correct');
  answerElement4.classList.remove('btn-wrong');
  if (currentItem < questionData.length - 1) {
    currentItem++
    questionElement.innerHTML = `Question ${currentItem + 1}: ${questionData[currentItem].question}`
    answerElement1.innerHTML = `${questionData[currentItem].answer1}`
    answerElement2.innerHTML = `${questionData[currentItem].answer2}`
    answerElement3.innerHTML = `${questionData[currentItem].answer3}`
    answerElement4.innerHTML = `${questionData[currentItem].answer4}`

  } else {
    alert('You have reached the end of the quiz!');
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
        if (quizScore >= 10) {
         scoreElement.innerHTML = `Well done! Your final score is: ${quizScore}/${currentItem + 1}`;
      } else if (quizScore >= 8) {
          scoreElement.innerHTML = `Not bad! Your final score is: ${quizScore}/${currentItem + 1}`;
      } else if (quizScore < 8) {
        scoreElement.innerHTML = `Better luck next time! Your final score is: ${quizScore}/${currentItem + 1}`;
      }



  }
  
  
  
  
  
  
  
 
}


let timesAnswered = 0;


function checkCorrectAnswer(value) {
  if (timesAnswered === 0) {
    if (value === 1) {
      if (answerElement1.innerHTML === questionData[currentItem].correctAnswer) {
          alert('Congratulations, you got the correct answer!');
          answerElement1.classList.add("btn-correct");
          quizScore++
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
          
          
      } else {
          alert('Sorry, you got the answer wrong!');
          answerElement1.classList.add("btn-wrong");
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
          
          

      }

    } else if (value === 2) {
        if (answerElement2.innerHTML === questionData[currentItem].correctAnswer) {
          alert('Congratulations, you got the question correct!');
          answerElement2.classList.add("btn-correct");
          quizScore++
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
          
        } else { 
          alert('Sorry, you got the question wrong!');
          answerElement2.classList.add("btn-wrong");
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
        }
      
          

    } else if (value === 3) {
        if (answerElement3.innerHTML === questionData[currentItem].correctAnswer) {
          alert('Congratulations, you got the question correct!');
          answerElement3.classList.add("btn-correct");
          quizScore++
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
          
      } else {
          alert('Sorry, you got the question wrong!');
          answerElement3.classList.add("btn-wrong");
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
      }

    } else if (value === 4) {
        if (answerElement4.innerHTML === questionData[currentItem].correctAnswer) {
          alert('Congratulations, you got the question correct!');
          answerElement4.classList.add("btn-correct");
          quizScore++
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
          
      } else {
          alert('Sorry, you got the question wrong!');
          answerElement4.classList.add("btn-wrong");
          timesAnswered++;
          scoreElement.innerHTML = `Score: ${quizScore}/${currentItem + 1}`;
          setTimeout(nextQuestion, 2000);
       

}

}


} else {
  

}

}


















