const sliderElement = document.getElementById('slider');

noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 100,
    },
    start: 0,    
    step: 1,
    connect: 'lower',
});

sliderElement.noUiSlider.on('update', (handle, unencoded) => {
    console.log('ку-ку');
});