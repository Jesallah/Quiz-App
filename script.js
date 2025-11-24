const quizData = [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Multi-Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
                answer: "Hyper Text Markup Language"
            },

            
            {
                question: "Which language is used for styling web pages?",
                options: ["JavaScript", "Python", "CSS", "Java"],
                answer: "CSS"
            },
            {
                question: "Which of the following is NOT a JavaScript framework?",
                options: ["React", "Angular", "Vue", "Laravel"],
                answer: "Laravel"
            },
            {
                question: "What does 'DOM' stand for?",
                options: ["Document Object Model", "Data Object Model", "Desktop Oriented Moxy", "Dynamic Operation Module"],
                answer: "Document Object Model"
            },
            {
                question: "What symbol is used to select an element by its ID in CSS?",
                options: [". (dot)", "# (hash)", "* (asterisk)", "& (ampersand)"],
                answer: "# (hash)"
            }
        ];

document.getElementById("question-box").addEventListener("submit", (event) => {
    event.preventDefault();
})

let questionsParagraph = document.getElementById("questions");
let option1 = document.getElementById("option1");

let questionIndex = 0;
questionsParagraph.textContent = quizData[questionIndex].question;




const rightAnswers = ['b', 'b', 'b', 'c', 'c', 'd', 'b', 'a', 'a', 'c'];
 function quizValid() {
    let score = 0;
    let allAnswered = true;
    const totalQuestions = correctAnswers.length;
 }
for (let b = 1; b <= totalQuestions; b++) {
        const questionName = `q${b}`;
        const Optionselelcted = document.querySelector(`input[name="${questionName}"]:checked`);
        
        if (!Optionselelcted) {
            allAnswered = false;
            break; 
        }
        if (Optionselelcted.value === correctAnswers[b - 1]) {
            score++;
        }
        if (!allAnswered) {
        alert('Please answer all questions before submitting.');
    } else {
        alert(`You scored ${score} out of ${totalQuestions}.`);
    }
}




document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        validateQuiz();
    });
})



