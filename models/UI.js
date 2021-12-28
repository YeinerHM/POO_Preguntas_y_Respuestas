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

    showChoices(choices, ){
        const choicesContainer = document.getElementById("choices")

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i];
            button.className = "button"
            button.addEventListener("click", () => console.log("clicked"))

            choicesContainer.append(button);
        }
    }
}