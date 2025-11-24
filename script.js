document.getElementById("quiz-box").addEventListener("submit", (event) => {
    event.preventDefault();
})

let questionsParagraph = document.getElementById("questions");
let option1 = document.getElementById("option1");

let questionIndex = 0;
questionsParagraph.textContent = quizData[questionIndex].question;


function calculateScore() {
    let score = 0;

    // Correct answer (key)
    const CorrectAnswers = {
        q1 : "b" ,
        q2 : "b" ,
        q3 : "b" ,
        q4 : "a" ,
        q5 : "c" ,
        q6 : "b" ,
        q7 : "b" ,
        q8 : "a" ,
        q9 : "a" ,
        q10 : "b"
    };

    // Check each question
    for (let question in CorrectAnswers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);

        if (selected) {
            if (selected.value === CorrectAnswers[question]){
                score++;
            }
        }
    }

    // show result 
    alert("Your score is: " + score + " / 10");
    location.reload(); 
}