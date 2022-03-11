import paymentSystem from './paymentSystem';

import luhn from './luhn';

export default class ValidationForm {
  constructor() {
    this.cards = [];
  }

  renderForm() {
    const body = document.querySelector('body');

    // creating wrapper
    this.form = document.createElement('div');
    this.form.classList.add('validation-form');

    // creating header
    const header = document.createElement('h3');
    header.innerText = 'Check your credit card number';
    this.form.appendChild(header);

    // creating cards list
    const cardsList = document.createElement('ul');
    cardsList.classList.add('cards');
    for (let i = 0; i < 6; i += 1) {
      const card = document.createElement('li');
      card.classList.add('card');
      cardsList.appendChild(card);
      this.cards.push(card);
    }
    this.cards[0].classList.add('visa');
    this.cards[1].classList.add('master');
    this.cards[2].classList.add('amex');
    this.cards[3].classList.add('discover');
    this.cards[4].classList.add('jcb');
    this.cards[5].classList.add('mir');
    this.form.appendChild(cardsList);

    // creating form
    const formGroup = document.createElement('form');
    formGroup.classList.add('form-inline');
    formGroup.innerHTML = '<form class=\'form-group\'><input class=\'form-control\' type=\'text\' placeholder=\'Credit card number\'> <button id=\'submitform\' class=\'btn \'>Click to Validate</button> </form>';
    this.form.appendChild(formGroup);
    body.appendChild(this.form);

    // creating messages
    this.validMessage = document.createElement('div');
    this.validMessage.classList.add('valid-message');
    this.validMessage.innerText = 'Card is valid';

    this.invalidMessage = document.createElement('div');
    this.invalidMessage.classList.add('invalid-message');
    this.invalidMessage.innerText = 'Card number is invalid';
  }

  // Reaction on input
  inputReact() {
    const input = document.querySelector('.form-control');
    input.addEventListener('input', () => {
      if (document.querySelector('.valid-message')) {
        this.form.removeChild(this.validMessage);
      }
      for (const elem of this.cards) {
        elem.classList.add('card-inactive');
      }
      if (/^[0-9\s]*$/.test(input.value)) {
        if (document.querySelector('.invalid-message')) {
          this.form.removeChild(this.invalidMessage);
        }
      } else {
        this.form.appendChild(this.invalidMessage);
      }
      if (!input.value) {
        for (const elem of this.cards) {
          elem.classList.remove('card-inactive');
        }
        if (document.querySelector('.invalid-message')) this.form.removeChild(this.invalidMessage);
      }

      const system = paymentSystem(input.value);
      if (system != null) {
        document.querySelector(`.${system}`).classList.remove('card-inactive');
      }
    });
  }

  luhnValidation() {
    document.querySelector('.form-inline').addEventListener('submit', (evt) => {
      evt.preventDefault();
      const { value } = document.querySelector('.form-control');
      if (luhn(value)) {
        this.form.appendChild(this.validMessage);
      } else this.form.appendChild(this.invalidMessage);
    });
  }
}
