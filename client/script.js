$(document).ready(function() {
  var BASE_URL = window.location.origin;

  var tryToUpdate = function() {
    // GET the next message.
    $.getJSON(BASE_URL + '/fetchmsg', function(resp) {
      var message = resp.message;

      if(message) {
        $('#message').innerText = message; // get the message.
      }
    });

  }

  window.setInterval(tryToUpdate, 10000); // try to update.
});
