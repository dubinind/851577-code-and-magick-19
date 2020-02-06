'use strict';
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;
var userDialog = document.querySelector('.setup');
var setupSimilar = userDialog.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomArrElement = function (array) {
  return array[getRandomNumber(0, array.length)];
};

var getWizardName = function () {
  return getRandomArrElement(WIZARD_FIRST_NAMES) + ' ' + getRandomArrElement(WIZARD_SECOND_NAMES);
};

var getWizardEye = function () {
  return getRandomArrElement(WIZARD_EYES_COLOR);
};

var getWizardCoat = function () {
  return getRandomArrElement(WIZARD_COAT_COLOR);
};

var getWizard = function () {
  return {
    name: getWizardName(),
    eyesColor: getWizardEye(),
    coatColor: getWizardCoat()
  };
};

var getWizards = function (wizardCount) {
  var tempWizards = [];
  for (var i = 1; i <= wizardCount; i++) {
    tempWizards.push(getWizard());
  }
  return tempWizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var showElement = function (element) {
  element.classList.remove('hidden');
};

renderWizards(getWizards(WIZARD_COUNT));
showElement(userDialog);
showElement(setupSimilar);
