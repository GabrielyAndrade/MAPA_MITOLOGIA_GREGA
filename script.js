// --- MENU RESPONSIVO MOBILE ---
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// --- RECURSO INTERATIVO 1: Abas de Conteúdo (Tabs) ---
function openTab(tabId) {
    // Esconde todos os conteúdos das abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove classe ativa de todos os botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostra a aba atual e marca o botão correspondente
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- RECURSO INTERATIVO 2: Mini-Quiz Dinâmico ---
function checkAnswer(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    if (isCorrect) {
        feedback.textContent = "Correto! Perseu decapitou a Medusa usando seu escudo como espelho.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Tente novamente! Dica: Ele usou sandálias aladas.";
        feedback.style.color = "red";
    }
}

// --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
function validateForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Elementos de entrada
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Elementos de erro
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successBox = document.getElementById('successForm');

    let isValid = true;

    // Validação do Nome
    if (name.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validação simples de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validação da Mensagem
    if (message.length < 10) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Se tudo for válido, mostra caixa de sucesso
    if (isValid) {
        successBox.style.display = 'block';
        document.getElementById('contactForm').reset(); // Limpa os campos
    }

    return isValid;
}