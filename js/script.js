function hover(element) {
  element.setAttribute('src', 'images/icons/hover/' + element.className + '.png');
};

function unhover(element) {
  element.setAttribute('src', 'images/icons/' + element.className + '.png');
};