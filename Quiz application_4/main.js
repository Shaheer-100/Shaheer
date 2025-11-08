const quizData = [
  {
    question: 'Who is the prime minister of India?',
    options: ['1. Rahul Gandhi', '2. Narendra Modi', '3. Donald Trump', '4. Saiket Systems'],
    answer: 1
  },
  {
    question: 'CSS stands for _',
    options: ['1. Cascading Style Shooters', '2. Cascading Style Stats', '3. Cascading Style Sheets', '4. Cascading Student Sheets'],
    answer: 2 
  },
  {
    question: 'Is Saiket Systems a money lending company?',
    options: ['1. Yes', '2. No', '3. Maybe', '4. It was'],
    answer: 1
  }
];


let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let userAnswers = new Array(quizData.length).fill(null);

const qtext = document.getElementById('question-text');
const option = document.getElementById('options-container');
const next = document.getElementById('next-btn');
const prev = document.getElementById('prev-btn');
const restart = document.getElementById('restart-btn');
const result = document.getElementById('result-container');
const tryagain = document.getElementById('try-again-btn');
const currentqno = document.getElementById('current-question');
const totalElement = document.getElementById('total');
const totalQuestionsElement = document.getElementById('total-questions');
const totalQuestionsFinal = document.getElementById('total-questions-final');
const finalScoreElement = document.getElementById('final-score');
const scoreElement = document.getElementById('score');


function initQuiz() {

  totalElement.textContent = quizData.length;
  totalQuestionsElement.textContent = quizData.length;
  totalQuestionsFinal.textContent = quizData.length;
  

  questionsloader();
}

function questionsloader() {
  
  qtext.textContent = quizData[currentQuestion].question;
  

  option.innerHTML = '';
  

  quizData[currentQuestion].options.forEach((optionText, index) => {
    const button = document.createElement('button');
    button.textContent = optionText;
    button.classList.add('option', 'btn');
    

    if (userAnswers[currentQuestion] === index) {
      button.classList.add('selected');
      selectedOption = index;
    }
    
    button.addEventListener('click', () => handleOptionSelect(index));
    option.appendChild(button);
  });
  

  currentqno.textContent = currentQuestion + 1;
  
 
  prev.disabled = currentQuestion === 0;
  next.disabled = selectedOption === null;
  

  updateScoreDisplay();
}

function handleOptionSelect(clickedIndex) {
  
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(button => {
    button.classList.remove('selected');
  });
  

  allOptions[clickedIndex].classList.add('selected');
  

  selectedOption = clickedIndex;
  userAnswers[currentQuestion] = clickedIndex;
  

  next.disabled = false;
  
  console.log(`Question ${currentQuestion + 1}: Option ${clickedIndex + 1} selected`);
}

function handleNextQuestion() {
  if (selectedOption === null) {
    alert('Please select an answer before proceeding!');
    return;
  }

  userAnswers[currentQuestion] = selectedOption;
  

  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
    selectedOption = userAnswers[currentQuestion];
    questionsloader();
  } else {

    calculateFinalScore();
    showResults();
  }
}

function handlePreviousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    selectedOption = userAnswers[currentQuestion];
    questionsloader();
  }
}

function calculateFinalScore() {
  score = 0;

  userAnswers.forEach((userAnswer, questionIndex) => {
    if (userAnswer === quizData[questionIndex].answer) {
      score++;
    }
  });
}

function showResults() {

  document.querySelector('.question-container').style.display = 'none';
  

  result.style.display = 'block';
  

  finalScoreElement.textContent = score;
  

  let messageText;
  if (score === quizData.length) {
    messageText = 'Perfect! You are a quiz master! 🎉';
  } else if (score >= 1) {
    messageText = 'Great job! 👍';
  } else {
    messageText = 'Good effort Loser! Keep practicing! 💪';
  }
  
  document.getElementById('result-message').textContent = messageText;
}

function updateScoreDisplay() {

  let currentScore = 0;
  for (let i = 0; i <= currentQuestion; i++) {
    if (userAnswers[i] !== null && userAnswers[i] === quizData[i].answer) {
      currentScore++;
    }
  }
  scoreElement.textContent = currentScore;
}

function restartQuiz() {

  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  userAnswers = new Array(quizData.length).fill(null);
  

  document.querySelector('.question-container').style.display = 'block';
  result.style.display = 'none';
  

  questionsloader();
}


next.addEventListener('click', handleNextQuestion);
prev.addEventListener('click', handlePreviousQuestion);
restart.addEventListener('click', restartQuiz);
tryagain.addEventListener('click', restartQuiz);

initQuiz();
