# javaScript-Quiz

About The Project 
This project is to build a multipe choice quiz with questions about Javasctipt. It includes a timer and saves user scores.

Built With 
HTML CSS Javascript

Usage 
When the browser is loaded the user can click on the start button. This will start the timer and load the first question with 4 choice buttons. If a user clicks the correct button then a pop up displaying correct will appear and 1 point will be added to their score and the next question will be displayed. If the user selects an incorrect an answer an alert will appear displaying incorrect and 5 seconds will be deducted from the time. When either the timer reaches 0 or all the questions are asnwered the score will be displayed. Also, a input field to enter their initials. The user can either submit or play again. If they submit their initials and score will be displayed on the highscore list. When they play again the original details are still displayed as its saved in local storage.


Roadmap 
The page currently satisfies the initial acceptance criteria. However, there are two bugs which need to be fixed (workarounds detailed below):

initials are not being defined when played again - workaround is to refresh browser as original scores are not lost and new ones can be added. 

Timer will not end correctly if alert is showing at 0 - so will go to -1, same if a user clicks playagain before timer would get to 0 - workaround is to allow timer to get to 0 before playing click again. Need to figure out wjhy clearINterval is not working - can fix other issue by removing alert for correct or incorrect and adding a message on html instead so 0 is not skipped.

Contact Name: Matthew McKenna email:matthewmckenna1986@hotmail.com

Project Link: https://github.com/mattmc86/javaScript-Quiz



