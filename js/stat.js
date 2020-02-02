'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - FONT_GAP - TEXT_HEIGHT - GAP - FONT_GAP;
var playerName = 'Вы';
var playerColumnColor = 'rgba(255, 0, 0, 1)';
var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';
var cloudColor = '#fff';
var titleText = 'Ура вы победили! \nСписок результатов: ';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText(text, x, y);
}

var renderColumn = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRoundNumber = function (number) {
  return Math.round(number);
}

var getRandomColor = function () {
  return 'hsl(240, 100%,' + getRandomNumber() + '%)';
}

var getRandomNumber = function () {
  return getRoundNumber(Math.random() * 100);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, cloudShadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);
  renderText(ctx, titleText, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);



  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderText(ctx, players[i], CLOUD_X + GAP + (TEXT_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP);
    renderText(ctx, getRoundNumber(times[i]), CLOUD_X + GAP + (TEXT_WIDTH + FONT_GAP) * i, CLOUD_Y + GAP + FONT_GAP + FONT_GAP);
    var columnColor = players[i] === playerName ? playerColumnColor : getRandomColor();
    renderColumn(ctx, CLOUD_X + GAP + (TEXT_WIDTH + FONT_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT, BAR_WIDTH, -((barHeight * times[i]) / maxTime), columnColor);
  }
}
