"use strict";

var dragList = document.querySelector('.list');
var dragItems = document.querySelectorAll('.item');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = dragItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var dragItem = _step.value;
    dragItem.draggable = true;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

dragList.addEventListener('dragstart', function (evt) {
  evt.target.classList.add('selected');
});
dragList.addEventListener('dragend', function (evt) {
  evt.target.classList.remove('selected');
});

var getNextElement = function getNextElement(cursorPosition, currentElement) {
  var currentElementCoord = currentElement.getBoundingClientRect();
  var currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  var nextElement = cursorPosition < currentElementCenter ? currentElement : currentElement.nextElementSibling;
  return nextElement;
};

dragList.addEventListener('dragover', function (evt) {
  evt.preventDefault;
  var activElement = dragList.querySelector('.selected');
  var currentElement = evt.target;
  var isMoveable = activElement !== currentElement && currentElement.classList.contains('item');

  if (!isMoveable) {
    return;
  }

  var nextElement = getNextElement(evt.clientY, currentElement);

  if (nextElement && activElement === nextElement.previousElementSibling || activElement === nextElement) {
    return;
  }

  dragList.insertBefore(activElement, nextElement);
});