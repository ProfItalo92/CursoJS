let selectedAnswers = {};

document.getElementById("startQuizButton").addEventListener("click", function() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("startQuizButton").style.display = "none"; // Esconde o botão
});

function selectAnswer(question, answer) {
    selectedAnswers[question] = answer;

    // Destaque os botões selecionados
    const buttons = document.querySelectorAll(`button[onclick="selectAnswer('${question}', '${answer}')"]`);
    buttons.forEach(button => {
        button.style.backgroundColor = '#555'; // Alterar cor do botão selecionado
    });
}

function submitQuiz() {
    let score = 0;
    const correctAnswers = {
        q1: 'a',  // getElementById() é usado para acessar um elemento pelo ID
        q2: 'a',  // innerText é usado para alterar o texto de um elemento
        q3: 'a',  // createElement() é usado para adicionar um novo elemento
        q4: 'a',  // removeChild() remove um elemento da página
        q5: 'a'   // addEventListener() é usado para responder a eventos no DOM
    };

    // Verifica as respostas e destaca as respostas corretas
    for (let question in correctAnswers) {
        const selectedButton = document.querySelector(`button[onclick="selectAnswer('${question}', '${selectedAnswers[question]}')"]`);
        const correctButton = document.querySelector(`button[onclick="selectAnswer('${question}', '${correctAnswers[question]}')"]`);
        
        if (selectedAnswers[question] === correctAnswers[question]) {
            score++;
            selectedButton.style.backgroundColor = 'green'; // Cor verde para respostas corretas
        } else {
            selectedButton.style.backgroundColor = 'red'; // Cor vermelha para respostas incorretas
            correctButton.style.backgroundColor = 'green'; // Cor verde para mostrar a resposta certa
        }
    }

    document.getElementById("quiz-result").innerHTML = `Você acertou ${score} de 5!`;

    // Habilitar o botão "Voltar para o Módulo 1" se o quiz for concluído corretamente
    if (score === 5) {
        document.getElementById("nextModuleButton").style.display = "block"; // Mostrar o botão para voltar ao Módulo 1
    }
}

function goToModule1() {
    window.location.href = 'index.html';  // Redireciona para o Módulo 1
}
