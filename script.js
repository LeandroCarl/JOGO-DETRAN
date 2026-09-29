let pontos = 0;


/* =========================
   INICIAR
========================= */

function iniciarJogo() {

    document
        .getElementById("tela-inicial")
        .classList.add("escondido");

    document
        .getElementById("tela-jogo")
        .classList.remove("escondido");
}


/* =========================
   RESPONDER
========================= */

function responder(acertou) {

    const botoes =
        document.querySelectorAll(".alternativa");

    // Impede escolher outra alternativa
    botoes.forEach(botao => {
        botao.disabled = true;
    });


    const cenario =
        document.getElementById("cenario");

    const resultado =
        document.getElementById("resultado");

    const explicacao =
        document.getElementById("explicacao");

    const mensagem =
        document.getElementById("mensagem-animacao");


    /* Remove animações anteriores */

    cenario.classList.remove(
        "animacao-correta",
        "animacao-incorreta",
        "impacto"
    );


    /*
        Força o navegador a reiniciar
        as animações CSS.
    */

    void cenario.offsetWidth;


    /* =========================
       RESPOSTA CORRETA
    ========================= */

    if (acertou) {

        pontos++;

        document.getElementById("pontuacao").textContent =
            `Pontos: ${pontos}`;

        resultado.textContent =
            "Resposta correta!";

        explicacao.textContent =
            "A placa PARE determina a parada obrigatória. " +
            "O motorista deve parar antes de prosseguir.";

        mensagem.textContent =
            "Você parou e seguiu com segurança.";

        cenario.classList.add(
            "animacao-correta"
        );

    }


    /* =========================
       RESPOSTA INCORRETA
    ========================= */

    else {

        resultado.textContent =
            "Resposta incorreta!";

        explicacao.textContent =
            "Você desrespeitou a placa PARE. " +
            "A sinalização determina a parada obrigatória " +
            "antes de prosseguir.";

        mensagem.textContent =
            "VOCÊ IGNOROU A PLACA PARE!";

        cenario.classList.add(
            "animacao-incorreta"
        );


        /*
            Após o carro avançar,
            ocorre o impacto.
        */

        setTimeout(() => {

            cenario.classList.add(
                "impacto"
            );

        }, 1400);
    }


    document
        .getElementById("feedback")
        .classList.remove("escondido");
}


/* =========================
   FINALIZAR
========================= */

function finalizar() {

    document
        .getElementById("tela-jogo")
        .classList.add("escondido");

    document
        .getElementById("tela-final")
        .classList.remove("escondido");


    document
        .getElementById("resultado-final")
        .textContent =
            `Você fez ${pontos} ponto(s).`;
}

