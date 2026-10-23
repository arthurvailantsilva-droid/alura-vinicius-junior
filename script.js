document.addEventListener("DOMContentLoaded", () => {
    // 1. Elementos da Troca de Tema
    const btnTheme = document.querySelector("#btn-theme");
    const body = document.body;

    btnTheme.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme", !isDark);

        // Atualiza a interface visual do botão de tema
        btnTheme.textContent = isDark ? "🌙 Modo Escuro" : "☀️ Modo Claro";
    });

    // 2. Sistema Reutilizável de Reações
    const setupReactionButton = (buttonId) => {
        const button = document.querySelector(buttonId);
        if (!button) return;

        button.addEventListener("click", () => {
            const countSpan = button.querySelector(".count");
            let currentCount = parseInt(countSpan.textContent, 10);
            
            // Incrementar contador
            countSpan.textContent = currentCount + 1;

            // Feedback visual rápido
            button.style.transform = "scale(1.05)";
            setTimeout(() => {
                button.style.transform = "none";
            }, 150);
        });
    };

    // Inicializa os botões
    setupReactionButton("#btn-fogo");
    setupReactionButton("#btn-craque");
});
