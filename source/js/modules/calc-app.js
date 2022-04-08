/* eslint-disable no-console */
// Расчет стоимости работ -- Начало --
// Calculation of the cost of work -- Start --
const calcApp = () => {
  const calcBlock = document.querySelector('.calculator');
  if (calcBlock) {
    const data = [];
    const screen01 = calcBlock.querySelector('[data-screen="screen01"]');
    const screen0201 = calcBlock.querySelector('[data-screen="screen0201"]');
    const screen0202 = calcBlock.querySelector('[data-screen="screen0202"]');
    const screen0203 = calcBlock.querySelector('[data-screen="screen0203"]');
    const screen03 = calcBlock.querySelector('[data-screen="screen03"]');
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
        const dataBuildingType = calcBlock.querySelector('input[name="building-age"]:checked').value;
        const dataWorkType = calcBlock.querySelectorAll('input[name="type-of-work"]:checked');

        const getDataWorkTypeValue = () => {
          let result = [];
          dataWorkType.forEach((item) => {
            result.push(item.value);
          });
          return result;
        };
        if (dataLength.value === '' && dataWidth.value === '') {
          dataLength.closest('.custom-input').classList.add('is-invalid');
          dataWidth.closest('.custom-input').classList.add('is-invalid');
        } else if (dataBuildingType === 'old-building') {
          setTimeout(() => {
            // data.push(dataLength.value, dataWidth.value, dataBuildingType, getDataWorkTypeValue());
            // console.log(data);
            removeScreen(screen01);
            showScreen(screen0201);
          }, 200);
        } else {
          setTimeout(() => {
            // data.push(dataLength.value, dataWidth.value, dataBuildingType, getDataWorkTypeValue());
            // console.log(data);
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
          screen03.querySelector('.calculator__form-title-marker').innerText = '5. ';
          showScreen(screen03);
        }, 200);
      }
      if (target.dataset.submit === 'back03') {
        setTimeout(() => {
          removeScreen(screen03);
          if (screen03.querySelector('.calculator__form-title-marker').innerText === '6. ') {

            showScreen(screen0203);
          } else {
            showScreen(screen0201);
          }
        }, 200);
      }
      if (target.dataset.submit === 'further0202') {
        setTimeout(() => {
          removeScreen(screen0202);
          showScreen(screen0203);
        }, 200);
      }
      if (target.dataset.submit === 'back0203') {
        setTimeout(() => {
          removeScreen(screen0203);
          showScreen(screen0202);
        }, 200);
      }
      if (target.dataset.submit === 'further0203') {
        setTimeout(() => {
          removeScreen(screen0203);
          screen03.querySelector('.calculator__form-title-marker').innerText = '6. ';
          showScreen(screen03);
        }, 200);
      }
      if (target.dataset.submit === 'further03') {
        setTimeout(() => {
          removeScreen(screen03);
          if (screen03.querySelector('.calculator__form-title-marker').innerText === '6. ') {
            screen04.querySelector('.calculator__form-title-marker').innerText = '7. ';
            showScreen(screen04);
          } else {
            screen04.querySelector('.calculator__form-title-marker').innerText = '6. ';
            showScreen(screen04);
          }
        }, 200);
      }
    });
  }
};
export {calcApp};

// Расчет стоимости работ -- Конец --
// Calculation of the cost of work -- End --
