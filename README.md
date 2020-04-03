
# Project: Star Wars Story Quiz

### App Title:
Star Wars - Story Quiz!

### App Description:
Tired of latest Star Wars canon? We've got the app for you! 

Just answer some easy multiple choice questions and our custom AI will write a pertinent and heartfelt story based on your choices!

After your choices are entered, just hit finish and voila! Your new Star Wars story is ready to be viewed on your browser or mobile device.

---


### API:

SWAPI
..* In order to fill out our choices in the quizzes and to fill in background characters in the story, we will choose random numbers and call the API to see who we get.

GIPHY
..* For the face-off against the antagonist we need the most meme-y image of them as possible.

Google Custom Search Engine
..* If GIPHY fails us, we will have to resort to finding another image. Or if we need a normal or serious image we can use the Google custom search. 
..* (Using two of them: one searches Star Wars Fandom Wiki and the other searches GIPHY if we hit our GIPHY limit)

---

### API Snippet:
[Link to my API Snippets](https://git.generalassemb.ly/drewhsu86/GA-SEI-Apollo-Project1/blob/master/APInotes.md)

### Wireframes:
Made using wireframe.cc

I decided to go very minimalistic for this design so that it's just clicking big answers for a quiz (kind of like Kahoot).

[Mobile:](https://wireframe.cc/g0XuUp)

[Browser:](https://wireframe.cc/LjJBkN)

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
image goes here

![alt text](https://media.giphy.com/media/zCv1NuGumldXa/source.gif "Logo Title Text 1")

### Timeframes:
placeholder table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |