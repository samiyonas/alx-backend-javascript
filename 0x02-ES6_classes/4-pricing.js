import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
