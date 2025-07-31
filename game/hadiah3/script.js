const questions = [
  {
    question: "2 + 2 x 2 = ?",
    answers: ["6", "8", "4", "10"],
    correct: 0
  },
  {
    question: "Jika hari ini Rabu, 3 hari lagi hari apa?",
    answers: ["Minggu", "Sabtu", "Jumat", "Senin"],
    correct: 2
  }
];

let currentIndex = 0;

const questionBox = document.getElementById("questionBox");
const answerButtons = document.getElementById("answerButtons");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showQuestion(index) {
  const q = questions[index];
  questionBox.textContent = q.question;
  answerButtons.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(i);
    answerButtons.appendChild(btn);
  });

  result.textContent = "";
  nextBtn.style.display = "none";
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentIndex].correct;
  if (selectedIndex === correctIndex) {
    result.textContent = "Benar!";
    result.style.color = "green";
  } else {
    result.textContent = "Salah!";
    result.style.color = "red";
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion(currentIndex);
  } else {
    questionBox.textContent = "Game Selesai!";
    answerButtons.innerHTML = "";
    result.textContent = "";
    nextBtn.style.display = "none";
  }
};

showQuestion(currentIndex);
