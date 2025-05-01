class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text; // data type strings
    this.choices = choices; // data type array of strings
    this.answer = answer; // data type strings
    this.difficulty = difficulty; // data type number
  }
  shuffleChoices() {
    //apply to the property choice using sort method and Math.random between -0 e 9.
    this.choices = this.choices.sort(() => Math.random() - 0.9);
  }
}
