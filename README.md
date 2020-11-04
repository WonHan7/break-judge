# break-judge v1

**DESIGN**
--------------------------------------------------------------------------------------------------

Page 1: Create Private Room

Page 2: Settings for Room. Settings will include:
* Competition Title (Can include optional picture. If picture not included, then just default font will be displayed)
* Dancer/Group #1 (Can include optional picture. If picture not included, then just name will be displayed)
* Dancer/Group #2
* Number of Judges
* Names of Judges (Judge's will be prompted to enter their names on connect)
* Number of Rounds
* Play Last Round (Y/N) --> Defaults to "End when someone wins"
* Enable Tie (Y/N) (Tie will always be disabled on the last round)
* // Host will send out url to room to all judges.

Page 3: The Private Room
* Host & Judges will all have to indicate readiness by clicking the "Ready" button.
* There will exist a chat for Host & Judges to communicate.
* There will be a "Settings" button that allows the Host to modify/upload the previous settings as needed.

Page 3.1: Public Page
* Competition's title or picture (Centralized).
* Dancers' names and/or picture (Opposing ends).
* Judges' names (And their votes when the round ends).
* Round number.
Page 3.2: Judge Page
* A simple interface that displays 2 colors (Blue|Red) and/or a TIE button depending on the round.

*Once win condition is met, proceed to winner's page.

Page 4.1: Public Winner's Page
* Display competition title or picture.
* Displays winner's name and/or picture.
* Displays winner's score.
Page 4.2: Host's Page
* Option to end competition or return to room.
* If settings is possible, return to room.
* If setting not possible, return to create a room.

Assumptions:
* Host will always be the one creating the room. The host will not be given the judge screen.
* It is assumed that the Host will have all material to fill out settings.
* It is assumed that the number of rounds will always be odd.
* It is assumed that the number of judges will always be odd.


**APPROACH**
--------------------------------------------------------------------------------------------------

* Learn how to use Single Page Application Frameworks (This web app will be using React.js)
* Learn how to use Yarn Node Packet Manager
* Learn how to use Express API
* Learn how to use Socket.io Library

**DEVELOPMENT**
--------------------------------------------------------------------------------------------------

* yarn - restore dependencies
* yarn init - creates package.json
* yarn start - starts dev server