$(document).ready(function() {

  $('#input').keydown(function(event) {
    if (event.keyCode == 13) {
      var number = $('#input').val();
      checkNum(number);
      console.log(number);
    };
  });

  $(document).on('click', '#clear', function(event) {
    console.log('hide');
      $('h3').hide();
  });

  function checkNum(number) {
    ((number%1 == 0) && (parseInt(number))) ? fizzBuzz(number) : alert('Enter a whole number please...');
  };

  function fizzBuzz(number) {
    for (var count = 1; count <= number; count++) {
      if (count%3 == 0 && count%5 == 0) {
        $('p').append('<h3>fizzBuzz</h3>');
      } else if (count% 3 == 0) {
        $('p').append('<h3>fizz</h3>');
      } else if (count%5 == 0) {
        $('p').append('<h3>buzz</h3>');
      } else {
        $('p').append('<h3>'+ count +'</h3>');
      };
    };
  };
});
