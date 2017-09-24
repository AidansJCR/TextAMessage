$(document).ready(function() {
  var BASE_URL = window.location.origin;

  var tryToUpdate = function() {
    // GET the next message.
    $.getJSON(BASE_URL + '/fetchmsg', function(resp) {
      var message = resp.message;
      console.log("Received:");
      console.log(message);
      console.log(resp);

      if(message) {
        $('#message').fadeOut(); // fade out
        console.log("Try to set the inner text");
        $('#message').text(message); // get the message.
        $('#message').fadeIn();
      }
    });

  }

  window.setInterval(tryToUpdate, 10000); // try to update.
});
