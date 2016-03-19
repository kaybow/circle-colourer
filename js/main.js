var $html = $('html');
var $input = $('#color-input');
var $picker = $('form');
var $ball = $('.ball');

$picker.on('change', function () {
  $ball.css('background-color', $input.val());
});
