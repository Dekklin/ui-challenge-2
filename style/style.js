'use strict';

$(document).ready(function() {
  $('*').css('font-family', 'Noto Serif');
  $('#require').show();
  $('#textbox').css('border-color', 'red');
  $('#textbox').change(function() {
    $('#textbox').css('border-color','black');
    $('#require').css('visibility','hidden');
  });
  $('#textbox.select').select(() => {
    if ($('#textbox').val() !== '') {
      $('#textbox').css('border-color', 'red');
    }
  });
  $('.dropdown').click(() => {
    $('.arrow').toggle();
    $('.arrowu').toggle();
    $('.optionlist').toggle();
  });
});