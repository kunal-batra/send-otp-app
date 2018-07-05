# send-otp-app
A frontend application which allows you to send OTP (via SMS) to a list of contacts, one at a time.

It takes JSON list of contacts as an input. You can create a fake static JSON for that. You can select a contact from the list and send an OTP (random 6-digit number) to that contact.

Messaging service used is MSG91 (https://control.msg91.com/signin/). You have to make an account on this platform and generate a key which is to be used in the code while hitting an AJAX request.

You can see a list of messages sent in descending order of date and time. Each list item will have the name of the contact, time of SMS and OTP sent in the SMS.

Technologies Used : HTML(5), CSS(3), Bootstrap(3.3.7), and JQuery.
