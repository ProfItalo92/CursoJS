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
        q1: 'a',  // O laço for é usado quando sabemos o número de repetições
        q2: 'b',  // O continue pula a iteração atual
        q3: 'a',  // A condição do while é verificada antes de executar o bloco
        q4: 'a',  // A diferença do do-while é que a condição é verificada após o bloco
        q5: 'a'   // Se não houver break no switch, o código continuará executando as próximas opções
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

// Função para redirecionar para o próximo módulo
function goToNextModule() {
    window.location.href = 'modulo5.html';  // Substitua pelo URL do próximo módulo
}
