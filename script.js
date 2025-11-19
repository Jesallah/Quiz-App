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