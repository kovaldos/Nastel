/* eslint-disable no-console */
// Расчет стоимости работ -- Начало --
// Calculation of the cost of work -- Start --
const calcApp = () => {
  const calcBlock = document.querySelector('.calculator');
  if (calcBlock) {
    const screen01 = calcBlock.querySelector('[data-screen="screen01"]');
    const screen0201 = calcBlock.querySelector('[data-screen="screen0201"]');
    const screen0202 = calcBlock.querySelector('[data-screen="screen0202"]');
    const screen0203 = calcBlock.querySelector('[data-screen="screen0203"]');
    const screen0204 = calcBlock.querySelector('[data-screen="screen0204"]');
    const screen0301 = calcBlock.querySelector('[data-screen="screen0301"]');
    const screen0302 = calcBlock.querySelector('[data-screen="screen0302"]');
    const screen0303 = calcBlock.querySelector('[data-screen="screen0303"]');
    const screen04 = calcBlock.querySelector('[data-screen="screen04"]');
    calcBlock.addEventListener('click', (event) => {
      let target = event.target;

      function showScreen(screen) {
        screen.classList.remove('is-hidden');
      }
      function removeScreen(screen) {
        screen.classList.add('is-hidden');
      }

      if (target.dataset.submit === 'further01') {

        const dataLength = calcBlock.querySelector('[data-size="length"] input');
        const dataWidth = calcBlock.querySelector('[data-size="width"] input');
        const dataBuildingType = calcBlock.querySelector('input[name="Тип дома"]:checked').id;
        if (dataLength.value === '' && dataWidth.value === '') {
          dataLength.closest('.custom-input').classList.add('is-invalid');
          dataWidth.closest('.custom-input').classList.add('is-invalid');
        } else if (dataBuildingType === 'old-building') {
          setTimeout(() => {
            removeScreen(screen01);
            showScreen(screen0201);
          }, 200);
        } else {
          setTimeout(() => {
            removeScreen(screen01);
            showScreen(screen0202);
          }, 200);
        }
      }
      if (target.dataset.submit === 'back0201') {
        setTimeout(() => {
          removeScreen(screen0201);
          showScreen(screen01);
        }, 200);
      }
      if (target.dataset.submit === 'back0202') {
        setTimeout(() => {
          removeScreen(screen0202);
          showScreen(screen01);
        }, 200);
      }
      if (target.dataset.submit === 'further0201') {
        setTimeout(() => {
          removeScreen(screen0201);
          if (calcBlock.querySelector('#warm-sliding').checked === true || calcBlock.querySelector('#cold-sliding').checked === true) {
            showScreen(screen0303);
          } else {
            screen0301.querySelector('.calculator__form-title-marker').innerText = '5. ';
            showScreen(screen0301);
          }
        }, 200);
      }
      if (target.dataset.submit === 'back0301') {
        setTimeout(() => {
          removeScreen(screen0301);
          if (screen0301.querySelector('.calculator__form-title-marker').innerText === '6. ') {
            showScreen(screen0203);
          } else {
            showScreen(screen0201);
          }
        }, 200);
      }
      if (target.dataset.submit === 'back0302') {
        setTimeout(() => {
          removeScreen(screen0302);
          if (screen0302.querySelector('.calculator__form-title-marker').innerText === '6. ') {
            showScreen(screen0204);
          } else {
            showScreen(screen0202);
          }
        }, 200);
      }
      if (target.dataset.submit === 'back0303') {
        setTimeout(() => {
          removeScreen(screen0303);
          showScreen(screen0201);
        }, 200);
      }
      if (target.dataset.submit === 'further0202') {
        setTimeout(() => {
          removeScreen(screen0202);
          if (calcBlock.querySelector('#tatprof').checked === true) {
            showScreen(screen0204);
          } else if (calcBlock.querySelector('#free-standing-glazing').checked === true) {
            screen0302.querySelector('.calculator__form-title-marker').innerText = '5. ';
            showScreen(screen0302);
          } else {
            showScreen(screen0203);
          }
        }, 200);
      }
      if (target.dataset.submit === 'back0203') {
        setTimeout(() => {
          removeScreen(screen0203);
          showScreen(screen0202);
        }, 200);
      }
      if (target.dataset.submit === 'back0204') {
        setTimeout(() => {
          removeScreen(screen0204);
          showScreen(screen0202);
        }, 200);
      }
      if (target.dataset.submit === 'further0203') {
        setTimeout(() => {
          removeScreen(screen0203);
          screen0301.querySelector('.calculator__form-title-marker').innerText = '6. ';
          showScreen(screen0301);
        }, 200);
      }
      if (target.dataset.submit === 'further0204') {
        setTimeout(() => {
          removeScreen(screen0204);
          screen0302.querySelector('.calculator__form-title-marker').innerText = '6. ';
          showScreen(screen0302);
        }, 200);
      }
      if (target.dataset.submit === 'further0301') {
        setTimeout(() => {
          removeScreen(screen0301);
          if (screen0301.querySelector('.calculator__form-title-marker').innerText === '6. ') {
            screen04.querySelector('.calculator__form-title-marker').innerText = '7. ';
            showScreen(screen04);
          } else {
            screen04.querySelector('.calculator__form-title-marker').innerText = '6. ';
            showScreen(screen04);
          }
        }, 200);
      }
      if (target.dataset.submit === 'further0302') {
        setTimeout(() => {
          removeScreen(screen0302);
          if (screen0302.querySelector('.calculator__form-title-marker').innerText === '6. ') {
            screen04.querySelector('.calculator__form-title-marker').innerText = '7. ';
            showScreen(screen04);
          } else {
            screen04.querySelector('.calculator__form-title-marker').innerText = '6. ';
            showScreen(screen04);
          }
        }, 200);
      }
      if (target.dataset.submit === 'further0303') {
        setTimeout(() => {
          removeScreen(screen0303);
          showScreen(screen04);
        }, 200);
      }
    });
  }
};
export {calcApp};

// Расчет стоимости работ -- Конец --
// Calculation of the cost of work -- End --
