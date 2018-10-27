// The main socket.io based guts behind displaying texts.

var socket = io();

// On message received from server:
socket.on('new-msg', (msg) => {

    // first, create a new container
    var container = $('<div>');
    container.addClass('container');
    container.addClass('fadein');

    // then, create a message object
    var message = $('<span></span>');
    message.addClass('message');
    message.text(msg);

    // create the author object
    var author = $('<span>');
    author.addClass('by');
    author.text(' - Anonymous');

    // add message and author to the container
    container.append(message);
    container.append(author);

    // add the container to the page at the top
    $('#page-container').prepend(container);
});

