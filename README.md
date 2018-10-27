# TextAMessage
Uses Twilio to receive people's messages and display them on a screen.

## Setup
Create a Twilio account, assign a number, and host this code on a domain.
We'll assume we are hosted on the following for this documentation:

```
example.com/
```

You'll need to specify in the Twilio Dashboard the webhook to use to deal with the message. This should be:

```
example.com/receive
```

Then, you should be good to go! You might need to adjust the number specified in the HTML file (just fork this repository for your own platform).

Also, make sure you have enough credit, and keep checking to ensure you don't run out during an event!

## Use:
Make sure the server is up, and navigate to the base domain, e.g. ```example.com```. Then, text in and watch messages appear!

If you want to clear the screen, simply refresh.
