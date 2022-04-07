// Расчет стоимости работ -- Начало --
// Calculation of the cost of work -- Start --

class Params {
  constructor(elem) {
    this.name = elem.id;
    // console.log(this.name);
    this.length = +elem.value;
    // this.width = +elem.value;
    this.buildingAge = elem.closest('.custom-toggle').dataset.buildingAge;
    console.log(this.buildingAge);
    // this.calories = +elem.closest('.custom-toggle').dataset.calories;
  }
}

export class Calculator {
  constructor(buildingAge) {
    // this.length = new Params(this.length);
    // this.width = new Params(this.width);
    this.buildingAge = new Params(this._select(buildingAge));
    // this.options = this._getOptions(options);
  }
  _getLength(name) {
    return document.querySelector(`input[name=${name}]`);
  }
  _select(name) {
    return document.querySelector(`input[name=${name}]:checked`);
  }
  // _getOptions(name) {
  //   let result = [];
  //   this._selectedCheckboxes(name).forEach((el) => {
  //     result.push(new Params(el));
  //   });
  //   return result;

  // }
  // _selectedCheckboxes(name) {
  //   return document.querySelectorAll(`input[name=${name}]:checked`);
  // }

  // _getTotalAmount() {
  //   let result = this.size.price + this.filling.price;
  //   this.options.forEach((option) => {
  //     result += option.price;
  //   });
  //   return result;
  // }

  // _getTotalCalories() {
  //   let result = this.size.calories + this.filling.calories;
  //   this.options.forEach((option) => {
  //     result += option.calories;
  //   });
  //   return result;
  // }

  // showTotal(price, calories) {
  //   document.querySelector(price).innerText = this._getTotalAmount();
  //   document.querySelector(calories).innerText = this._getTotalCalories();
  // }
}

// Расчет стоимости работ -- Конец --
// Calculation of the cost of work -- End --
