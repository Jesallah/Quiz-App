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


