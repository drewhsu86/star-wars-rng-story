
# Project: Star Wars RNG Story

### App Title:
Star Wars - RNG Story!

### App Description:
Tired of latest Star Wars canon? We've got the app for you! 

Just answer some easy multiple choice questions and our custom AI will write a thrilling and heartfelt story based on your choices!

After your choices are entered, just hit finish and voila! Your new Star Wars story is ready to be viewed on your browser or mobile device.

---


### API:

SWAPI
* In order to fill out our choices in the quizzes and to fill in background characters in the story, we will choose random numbers and call the API to see who we get.

GIPHY
* For the face-off against the antagonist we need the most meme-y image of them as possible.

Google Custom Search Engine
* If GIPHY fails us, we will have to resort to finding another image. Or if we need a normal or serious image we can use the Google custom search. 
* We also set up a Google CSE for the Star Wars Fandom website. This will find non-meme based, regular images for some of the quiz questions so that serious story decisions can be made.

---

### API Snippet:
[Link to my API Snippets](https://git.generalassemb.ly/drewhsu86/GA-SEI-Apollo-Project1/blob/master/APInotes.md)

Screenshots:

1. SWAPI (in postman):

![SWAPI IN POSTMAN](./images/postman-swapi.png)

2. GIPHY (in postman):

![GIPHY IN POSTMAN](./images/postman-giphy.png)

3. Google CSE (in postman, but returns error):

![GoogleCSE IN POSTMAN](./images/postman-googleCSE.png)

* but the Google CSE endpoint works with Axios and in chrome

![GoogleCSE IN Axios](./images/vsCode-googleCSE.png)
![GoogleCSE IN Chrome Inspector](./images/inspector-googleCSE.png)

### Wireframes:
Made using wireframe.cc

I decided to go very minimalistic for this design so that it's just clicking big answers for a quiz (kind of like Kahoot).



[Mobile:](https://wireframe.cc/g0XuUp)
![Mobile Wireframe](./images/wireframe-mobile.png)


[Browser:](https://wireframe.cc/LjJBkN)
![Browser Wireframe](./images/wireframe-browser.png)

### MVP: 
1. User interface: presents questions to the users with the goal of collecting some answers (with visual buttons, maybe divs as buttons). The buttons will be aligned using css flex

2. Use the user's answers and some randomization to create and present a story. These will start after the user clicks finish and the API calls finish (thinking about coding so that the button cannot be pressed multiple times)

3. An array will store a bunch of story scenes assembled from our data, both character info and images found on Giphy and Google CSE. This data will be used to create divs and append them to the page. Each div will have a button at the bottom, which hides the current div and opens the next one.


### Post-MVP
1. Technical improvements: 
* Better use and minimization of API calls (maybe call an array on load and store the data?). 
* Remove bugs from loading or other behavior that comes with JS and any HTML elements.

2. CSS improvements: 
* Interactivity, such as good hover for the buttons and transitions between scenes. Thinking about doing a height: 0px transition and then hiding the div.

3. Usability/User experience improvements:
* Find ways to generate more scenarios. Currently I plan to hard code some story elements so that the app works. I might look into if news API or another API can be used to replace proper nouns (words with a capital letter but don't come after a period) with star wars characters. 
* If I find a usable dictionary app I could have the computer generate better word replacements using star wars characters but this is a lot more work than just the base functionality.


### Goals: 

| Day       | Goal           | Exp. Hrs  |
| ------------- |:-------------:| -----|
| April 4 - Saturday  | all APIs return valid calls and data | 4 |
| April 4 - Saturday  | wireframes and plan for html     |   3   |
| April 5 - Sunday  | finish project plan | 8 |
| April 6 - Monday     | get project approval     |   1 |
| April 6 - Monday  | HTML skeleton & css (flexbox only)   |    3 |
| April 6 - Monday  | JS - quiz records answers and continues | 5 |
| April 7 - Tuesday | JS - recorded answers and API calls create story | 4 |
| April 7 - Tuesday | JS - generated story appends proper divs | 4 |
| April 8 - Wednesday | all basic functionality runs beginning to end | 4 |
| April 8 - Wednesday | css pass over all relevant elements | 4 |
| April 9 - Thursday | css and bugs day | 8 |

### Priority Matrix:

[Link to priority matrix](https://wireframe.cc/3Ovi0s)

![Priority Matrix](./images/priority-matrix.png "Priority Matrix")

### Timeframes:
Expected vs actual hours spent per task

| Goal      | Exp. Hrs          | Actual Hrs  |
| ------------- |:-------------:| -----|
| all APIs return valid calls and data | 4 |  4 |
| wireframes and plan for html     |   3   | ? |
| finish project plan | 8 | ? |
| get project approval     |   1 | ? |
| HTML skeleton & css (flexbox only)   |    3 | ? |
| JS - quiz records answers and continues | 5 | ? |
| JS - recorded answers and API calls create story | 4 | ? |
| JS - generated story appends proper divs | 4 | ? |
| all basic functionality runs beginning to end | 4 | ? |
| css pass over all relevant elements | 4 | ? |
| css and bugs | 8 | ? |