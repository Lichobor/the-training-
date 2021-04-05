const dragList = document.querySelector('.list');
const dragItems = document.querySelectorAll('.item');

for (const dragItem of dragItems) {
    dragItem.draggable = true;
}

dragList.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('selected');
});

dragList.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('selected')
});

const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    const nextElement = (cursorPosition < currentElementCenter) ? currentElement : currentElement.nextElementSibling;
    return nextElement;
};

dragList.addEventListener('dragover', (evt) => {
    evt.preventDefault
    const activElement = dragList.querySelector('.selected');
    const currentElement = evt.target;
    const isMoveable = activElement !== currentElement && currentElement.classList.contains('item');
    if (!isMoveable) {
        return
    }

    const nextElement = getNextElement(evt.clientY, currentElement);

    if (
        nextElement &&
        activElement === nextElement.previousElementSibling || activElement === nextElement
    ) {
        return;
    }

    dragList.insertBefore(activElement, nextElement);
});