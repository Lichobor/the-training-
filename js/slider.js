const sliderElement = document.getElementById('slider');
const valueElement = document.querySelector('.level-form__value');
const specialElement = document.querySelector('.level-form__special')

noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 10000,
    },
    start: 0,
    step: 1,
    connect: 'lower',
    format: {
        to: function (value) {
            if (Number.isInteger(value)) {
                return value.toFixed(0);
            }
            return value.toFixed(1);
        },
        from: function (value) {
            return parseFloat(value);
        },
    },
});

sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];    
});

specialElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 10,
            },            
            step: 0.1,
        });
        sliderElement.noUiSlider.set(0);
    } else {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 1000,
            },            
            step: 1,
        });
        sliderElement.noUiSlider.set(0);
    };
});

