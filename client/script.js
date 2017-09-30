$(document).ready(function() {
  var BASE_URL = window.location.origin;

  var tryToUpdate = function() {
    // GET the next message.
    $('#message').addClass('fadeout')
    $.getJSON(BASE_URL + '/fetchmsg', function(resp) {
      var message = resp.message;

      // if we have a message, update the screen. Otherwise, don't.
      if(message) {
        console.log("Try to set the inner text");
        $('#message').text(message); // get the message.
        $('message').removeClass('fadeout')
        $('#message').addClass('fadein')
      }
    });

  }

  window.setInterval(tryToUpdate, 10000); // try to update.
});
