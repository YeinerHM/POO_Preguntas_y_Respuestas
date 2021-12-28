export class Question {
  /**
   *
   * @param {string} text Es el texto dela pregunta
   * @param {string} choices Esta son las opciones de la pregunta
   * @param {string} answer Estaa es la respuesta correcta
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice  Texto para validar
   * @returns {boolean} return true si la respuesta(answer) es correcta
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}