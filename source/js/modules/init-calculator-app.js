/* eslint-disable no-console */
// Инициализация расчета стоимости и калорийности бургера -- Начало --
// Initialization of the calculation of the cost and calorie content of the burger -- Start --

import {Calculator} from './calculator-app';

const initCalculatorApp = () => {
  const parentEl = document.querySelector('.calculator__wrapper');
  if (parentEl) {
    parentEl.addEventListener('click', (e) => {
      const btn = parentEl.querySelector('[data-submit]');
      if (e.target.dataset === btn.dataset) {
        let calculator = new Calculator('building-age');
        // calculator.showTotal('[data-total-amount]', '[data-total-calories]');
        console.log(calculator);
      }
    });
  }
};
export {initCalculatorApp};

// Инициализация расчета стоимости и калорийности бургера -- Конец --
// Initialization of the calculation of the cost and calorie content of the burger -- End --
