const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple sheets",
    d: "Cars, SUVs, Sailboats",
    correction: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Learning",
    d: "Helicopters Terminals Motors Logistics",
    correction: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correction: "b",
  },
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer"); //radio
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; //the index of each quiz
let score = 1;

function loadQuiz() {
  deselectAnswers();
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false)); //start each radio type as being NOT checked
}

submitBtn.addEventListener("click", () => {
  const answer =
    getSelected(); /*if you want to use the results of the getSelected funtion and use if/else conditions for those results,
    then put the getSelected function in a variable and use this variable to create the if/else statements */

  if (answer === quizData[currentQuiz].correction) {
    score++;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>
      <button onclick = "location.reload()">Reload </button>`;
  }
});

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id; // the id in the HTML.. so we are getting the id being a, b ,c or d to overlap it with those in the objects being a, b , c , d
      console.log(answer);
    }
  });
  return answer;
}
