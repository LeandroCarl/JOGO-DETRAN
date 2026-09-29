# 🚦 Simulador CNH — Jogo Educativo do DETRAN

Um jogo educativo desenvolvido para auxiliar candidatos à **primeira habilitação** e pessoas que desejam revisar seus conhecimentos de trânsito para a prova teórica do DETRAN.

A proposta do projeto é transformar o estudo tradicional, baseado apenas em perguntas e respostas, em uma experiência **mais visual, interativa e divertida**, permitindo que o usuário compreenda não apenas qual é a resposta correta, mas também **por que ela está correta**.

---

## 📌 Sobre o projeto

O **Simulador CNH** surgiu a partir da necessidade de tornar o processo de preparação para a prova teórica do DETRAN mais intuitivo.

Muitos simuladores disponíveis apresentam questões de múltipla escolha de forma tradicional, mostrando apenas a pergunta, as alternativas e, ao final, se o usuário acertou ou errou.

Neste projeto, a proposta é utilizar **elementos visuais, animações, explicações e gamificação** para facilitar a compreensão das regras de trânsito.

### Exemplo

Em uma questão sobre **distância segura entre veículos**, em vez de apresentar somente um texto explicativo, o sistema pode apresentar uma animação demonstrando dois cenários:

* 🚗 **Cenário A:** o veículo mantém uma distância inadequada e ocorre uma colisão.
* 🚙 **Cenário B:** o veículo mantém uma distância segura e consegue reagir a tempo.

Dessa forma, o usuário consegue visualizar a consequência de cada decisão.

---

## 🎯 Objetivo

O principal objetivo do projeto é criar uma plataforma de estudo que permita aos usuários:

* Estudar conteúdos relacionados às leis e regras de trânsito;
* Responder questões semelhantes às encontradas na prova teórica;
* Visualizar situações de trânsito por meio de animações e elementos gráficos;
* Receber explicações após responder uma questão;
* Identificar seus erros e revisar conteúdos;
* Acompanhar seu progresso;
* Utilizar um sistema de pontuação para tornar o estudo mais motivador.

---

## 👤 Público-alvo

O sistema é destinado principalmente a:

* Pessoas que estão tirando a **primeira CNH**;
* Pessoas que estão se preparando para a prova teórica do DETRAN;
* Condutores que desejam revisar conhecimentos sobre trânsito;
* Usuários que preferem aprender por meio de experiências visuais e interativas.

---

## 🎮 Principais funcionalidades

### 📚 Categorias de estudo

As questões podem ser organizadas em diferentes categorias, como:

* Legislação de trânsito;
* Sinalização;
* Direção defensiva;
* Primeiros socorros;
* Meio ambiente e cidadania;
* Mecânica básica;
* Infrações e penalidades.

### ❓ Questões interativas

O usuário responde questões de múltipla escolha e recebe um retorno imediato sobre sua resposta.

Após responder, o sistema apresenta:

* Resposta correta;
* Indicação de acerto ou erro;
* Explicação da alternativa correta;
* Informações complementares;
* Animação ou representação visual quando aplicável.

### 🎬 Conteúdo visual

Questões que envolvem situações práticas podem utilizar:

* Animações;
* Ilustrações;
* Cenários de trânsito;
* Representações de veículos;
* Simulações de situações reais.

O objetivo é facilitar a compreensão de conceitos que podem ser difíceis de entender apenas por texto.

### 🏆 Sistema de pontuação

O jogo possui elementos de gamificação para estimular a continuidade dos estudos.

O usuário pode ganhar pontos por:

* Responder corretamente;
* Completar atividades;
* Concluir categorias;
* Manter uma sequência de estudos;
* Melhorar seu desempenho.

### 📊 Progresso

O sistema pode registrar informações como:

* Questões respondidas;
* Questões acertadas;
* Questões erradas;
* Pontuação;
* Categorias concluídas;
* Desempenho geral.

### 🔄 Simulados

O usuário pode iniciar simulados contendo diferentes questões e responder em um formato semelhante ao de uma prova teórica.

Ao finalizar, o sistema apresenta o resultado e permite identificar os assuntos que precisam de maior atenção.

---

## 🧠 Proposta de aprendizagem

Diferentemente de um simulador tradicional, o projeto busca trabalhar com o conceito de **aprender através da visualização e da interação**.

A experiência segue, de maneira geral, o fluxo:

```text
Questão
   ↓
Interação do usuário
   ↓
Resposta
   ↓
Feedback imediato
   ↓
Explicação
   ↓
Visualização da situação
   ↓
Fixação do conteúdo
```

Isso permite que o usuário compreenda o contexto da regra de trânsito, em vez de simplesmente memorizar uma alternativa.

---

## 🕹️ Fluxo principal do usuário

```text
           ┌───────────────┐
           │    Início     │
           └───────┬───────┘
                   │
                   ▼
          ┌─────────────────┐
          │ Escolher modo   │
          └────────┬────────┘
                   │
          ┌────────┴─────────┐
          │                  │
          ▼                  ▼
   ┌─────────────┐    ┌─────────────┐
   │  Estudar    │    │  Simulado   │
   └──────┬──────┘    └──────┬──────┘
          │                  │
          └────────┬─────────┘
                   ▼
          ┌─────────────────┐
          │ Responder       │
          │ questões        │
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ Feedback +      │
          │ explicação      │
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ Pontuação /     │
          │ progresso       │
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ Próxima questão │
          └─────────────────┘
```

---

## 💡 Diferenciais

O principal diferencial do projeto é combinar **educação + interatividade + gamificação**.

Em vez de tratar a preparação para a prova apenas como um banco de questões, o sistema procura criar uma experiência na qual o usuário consiga:

> **ver a situação, tomar uma decisão, receber feedback e compreender a regra de trânsito.**

Isso é especialmente importante em conteúdos que envolvem situações práticas, nas quais uma explicação visual pode facilitar a compreensão.

---

## 🏗️ Desenvolvimento

O projeto pode ser dividido em etapas:

### 1. Pesquisa

Levantamento dos conteúdos cobrados na prova teórica e análise das dificuldades dos usuários.

### 2. Definição das funcionalidades

Identificação das funcionalidades essenciais para a primeira versão do sistema.

### 3. Prototipação

Criação das telas e definição da experiência do usuário.

### 4. Desenvolvimento

Implementação das funcionalidades do jogo, banco de questões, sistema de pontuação e feedback.

### 5. Testes

Realização de testes para identificar problemas de usabilidade, funcionamento e compreensão das questões.

### 6. Validação

Avaliação da experiência dos usuários e coleta de sugestões para futuras versões.

---

## 📈 Possíveis melhorias futuras

Algumas funcionalidades podem ser adicionadas posteriormente:

* Ranking entre usuários;
* Conquistas e medalhas;
* Sistema de níveis;
* Desafios diários;
* Modo multiplayer;
* Personalização do perfil;
* Histórico detalhado de desempenho;
* Mais animações e situações práticas;
* Banco de questões expandido;
* Aplicativo para dispositivos móveis.

---

## ⚠️ Observação

Este projeto possui finalidade **educacional** e tem como objetivo auxiliar nos estudos.

As questões e informações utilizadas no sistema devem ser elaboradas ou revisadas com base na **legislação de trânsito vigente** e em fontes oficiais, uma vez que regras, procedimentos e conteúdos podem ser atualizados.

O sistema não substitui aulas teóricas, materiais oficiais ou as orientações dos órgãos de trânsito competentes.

---

## 👨‍💻 Equipe

Projeto desenvolvido por:

* Samuel Iago de Farias Cabral
* Leandro Carlos Martins de Carvalho
* Rafael Fernandes
