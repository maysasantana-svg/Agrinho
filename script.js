// Aguarda todo o HTML da página carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. EFEITO DE APARECER OS CARDS AO ROLAR A PÁGINA (SCROLL ANIMATION) ---
    const cards = document.querySelectorAll('.card');

    const checarCards = () => {
        // Define o ponto da tela onde o efeito vai ativar (80% da altura da tela)
        const gatilhoAtivacao = (window.innerHeight / 5) * 4;

        cards.forEach(card => {
            const cardTopo = card.getBoundingClientRect().top;

            // Se o card chegou na posição visível, adiciona a classe 'visivel'
            if (cardTopo < gatilhoAtivacao) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Configuração inicial dos cards antes da animação (escondidos e um pouco abaixo)
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
    });

    // Executa a função quando o usuário rola a página
    window.addEventListener('scroll', checarCards);
    // Executa uma vez logo no início para o caso de algum card já estar na tela
    checarCards();


    // --- 2. MENSAGEM DE BOAS-VINDAS INTERATIVA NO CONSOLE ---
    console.log("🌱 Site do Agrinho 2026 carregado com sucesso! Tema: Agronegócio: Futuro Sustentável.");
});