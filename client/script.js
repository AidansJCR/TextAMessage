var socket = io();
socket.on('new-msg', (msg) => {
    // create a new container
    var container = $('<div>');
    container.addClass('container');
    container.addClass('fadein');

    // create a message object
    var message = $('<span></span>');
    message.addClass('message');
    message.text(msg);

    // create the author object
    // TODO display last few digits of their number (or assign random names)
    var author = $('<span>');
    author.addClass('by');
    author.text(' - Anonymous');

    // add information to the container
    container.append(message);
    container.append(author);

    // add the new message to the page
    $('#page-container').prepend(container);
});

// $(document).ready(function() {
//   var BASE_URL = window.location.origin;
//
//   var tryToUpdate = function() {
//     // GET the next message.
//     $.getJSON(BASE_URL + '/fetchmsg', function(resp) {
//       var textMessage = resp.message;
//
//       // if we have a message, update the screen. Otherwise, don't.
//       if(textMessage) {
//         // create a new container:
//         var container = $('<div></div>');
//         container.addClass('container')
//         container.addClass('fadein')
//         // create a message object.
//         var message = $('<span></span>');
//         message.addClass('message');
//         message.text(textMessage);
//
//         // create the author object
//         // todo display last few digits of their number (or assign random names)
//         var author = $('<span></span>');
//         author.addClass('by');
//         author.text(' - Anonymous');
//
//         // add information to the container.
//         container.append(message);
//         container.append(author);
//
//         // add the new message to the page.
//         $('#page-container').append(container);
//       }
//     });
//
//   }
//
//   window.setInterval(tryToUpdate, 10000); // try to update.
// });
