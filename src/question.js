class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text; // data type strings
    this.choices = choices; // data type array of strings
    this.answer = answer; // data type strings
    this.difficulty = difficulty; // data type number
  }
  shuffleChoices()