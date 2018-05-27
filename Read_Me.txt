My Contacts App is a simple app which can send OTP messages to your contact list, and also generates a list of your sent messages.

This App is made using following technologies:

1) HTML(5)
2) CSS(3)
3) Bootstrap Framework (3.3.7)
4) JQuery (1.12.4)
5) AJAX
6) JSON

API used for sending text messages: sendotp API by msg91.

Some problems faced during the implementation:
           Cross Origin Request problem occured while sending the request to msg91 API. It was not allowing the data because of security purposes.
           To overcome this, i used datatype as jsonp instead of json and the problem was resolved.

Local Storage is used for storing the JSON data, so its browser dependent. Therefore, messages i sent for testing purposes will not be visible to you.

Receiver: I have set the receiver's number to +91 9971792703 (as mentioned in the task).
Sender's Name: When you recieve a message from this app, the sender's name will be "VM-KISAAN" or "VK-KISAAN". Basically the identification should be done by seeing the word "KISAAN".

NOTE: "Uncaught SyntaxError: Unexpected token :"
This above error is occuring every time because the Content-Type in Response Headers is 'text/html', so, it is not reading JSONP properly. It is an API issue. But the app is fully functional.

Web app is live on : https://s3.ap-south-1.amazonaws.com/kunal.otptask.com/index.html

This app is made by Kunal Batra as a task given by Kisan Networks. You may contact me on my email: kunalbtr49@gmail.com.

Thanks
Kunal Batra