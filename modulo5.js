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
        q1: 'b',  // Função é um bloco de código reutilizável
        q2: 'b',  // return retorna um valor para quem chamou a função
        q3: 'a',  // Closures são funções que acessam variáveis externas
        q4: 'a',  // Erro! A variável não está acessível fora do seu escopo
        q5: 'a'   // Escopo de bloco significa que a variável só é acessível no bloco
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

    // Habilitar o botão "Próximo Módulo" se o quiz for concluído corretamente
    if (score === 5) {
        document.getElementById("nextModuleButton").style.display = "block"; // Mostrar o botão para o próximo módulo
    }
}

function goToNextModule() {
    window.location.href = 'modulo6.html';  // Substitua pelo URL do próximo módulo
}
