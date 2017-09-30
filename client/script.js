$(document).ready(function() {
  var BASE_URL = window.location.origin;

  var tryToUpdate = function() {
    // GET the next message.
    $.getJSON(BASE_URL + '/fetchmsg', function(resp) {
      var message = resp.message;

      // if we have a message, update the screen. Otherwise, don't.
      if(message) {
        // create a new container:
        var container = $('<div></div>');
        container.addClass('fadein')

        // create a message object.
        var message = $('<span></span>');
        message.addClass('message');
        message.text(message);

        // create the author object
        // todo display last few digits of their number (or assign random names)
        var author = $('<span></span>');
        author.addClass('by');
        author.text('Anonymous');

        // add information to the container.
        container.append(message.html);
        container.append(author.html);

        // add the new message to the page.
        $('#page-container').append(container);
      }
    });

  }

  window.setInterval(tryToUpdate, 10000); // try to update.
});
