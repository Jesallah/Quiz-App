document.getElementById("quiz-box").addEventListener("submit", (event) => {
    event.preventDefault();
})

let questionsParagraph = document.getElementById("questions");
let option1 = document.getElementById("option1");

let questionIndex = 0;
questionsParagraph.textContent = quizData[questionIndex].question;