/* eslint-disable no-console */
// Расчет стоимости работ -- Начало --
// Calculation of the cost of work -- Start --
const calcApp = () => {
	const calcBlock = document.querySelector('.calculator');
	if (calcBlock) {
		const data = [];
		calcBlock.addEventListener('click', (event) => {
			let target = event.target;
			if (target.dataset.submit === 'further01') {
				const dataLength = calcBlock.querySelector('[data-size="length"] input');
				const dataWidth = calcBlock.querySelector('[data-size="width"] input');
				const dataBuildingType = calcBlock.querySelector('input[name="building-age"]:checked').value;
				const dataWorkType = calcBlock.querySelectorAll('input[name="type-of-work"]:checked');
				if (dataBuildingType === 'old-building') {
					console.log('screen0201');
					// remove(startScreen)
					// render(screen0201)

				} else {
					console.log('screen0202');
					// remove(startScreen)
					// render(screen0202)
				}
				data.push(dataLength.value, dataWidth.value, dataBuildingType, dataWorkType);
			}

		});
	}
};
export {calcApp};

// Расчет стоимости работ -- Конец --
// Calculation of the cost of work -- End --
