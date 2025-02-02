let selectedAnswers = {};

document.getElementById("startQuizButton").addEventListener("click", function() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("startQuizButton").style.display = "none";
});

function selectAnswer(question, answer) {
    selectedAnswers[question] = answer;
    const buttons = document.querySelectorAll(`button[onclick="selectAnswer('${question}', '${answer}')"]`);
    buttons.forEach(button => {
        button.style.backgroundColor = '#555';
    });
}

function submitQuiz() {
    let score = 0;
    const correctAnswers = {
        q1: 'a',
        q2: 'a',
        q3: 'a',
        q4: 'a',
        q5: 'c'
    };

    for (let question in correctAnswers) {
        const selectedButton = document.querySelector(`button[onclick="selectAnswer('${question}', '${selectedAnswers[question]}')"]`);
        const correctButton = document.querySelector(`button[onclick="selectAnswer('${question}', '${correctAnswers[question]}')"]`);
        
        if (selectedAnswers[question] === correctAnswers[question]) {
            score++;
            selectedButton.style.backgroundColor = 'green';
        } else {
            selectedButton.style.backgroundColor = 'red';
            correctButton.style.backgroundColor = 'green';
        }
    }

    document.getElementById("quiz-result").innerHTML = `Você acertou ${score} de 5!`;

    if (score === 5) {
        document.getElementById("nextModuleButton").style.display = "block";
    }
}

function goToNextModule() {
    window.location.href = 'modulo2.html';  // Redirecionamento para o próximo módulo
}
