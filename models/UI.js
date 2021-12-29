export class UI {
    constructor() {}


    /**
     * 
     * @param {string} text  pregunta para renderisar
     */
    showQuestion(text){
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text;

    }


    /**
     * 
     * @param {string} choices  la eleccion de la pregunta
     */

    showChoices(choices, callback){
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = ""

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i];
            button.className = "button"
            button.addEventListener("click", () => callback(choices[i]));

            choicesContainer.append(button);
        }
    }

    /**
     * 
     * @param {number} score el total de puntuacion score
     */
    showScores(score) {
        const quizEndHTML =  `
        <h1>Resultado</h1>
        <h2 id="score">Puntuación: ${score}</h2>
        `;
        const element = document.getElementById("quiz")
        element.innerHTML = quizEndHTML;

    }

    /**
     * 
     * @param {number} currentIndex  En indice actual es de quiz
     * @param {number} total el total de las preguntas
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById("progress")
        element.innerHTML =  `Pregunta ${currentIndex} de ${total}`;
    }
}