
# Project #1: Your First Application

### App Title:
Star Wars - You Write The MadLib!

### App Description:
Tired of thinking of words to write into blanks? Can't help but think of Star Wars instead? Well I've got the ~~job~~ distraction for you!

Write your own stories! Use my ~~syntactical~~ simple ~~markup language~~ buttons to add random Star Wars characters, planets, starships, vehicles and species to your story! If you make a mistake, simply erase it from the story text!

Sit back and press a button to let us process your story and make it magical and random! 

Look for further instructions to make fun character and starship text boxes! Using amazing Google Custom Search Engine and Giphy technology!!!

---
Operation and Restrictions:

We will allow a user to write a story into a textarea element. Letters, numbers and spaces will be processed normally. We will probably use open and close square brackets [] to indicate that instructions will be given.

If the user writes [ppl-1] our string parser will find it, and check if we need more people to be called by SWAPI. By the time the story text is parsed, it would replace all the [ppl-1] with a character, for example 'Anakin Skywalker'. 

Five categories with abbreviations:
1. ppl - people
2. plt - planets
3. stp - starships
4. veh - vehicles
5. spc - species

We will add buttons to the aside that adds in a tag for the user (but they will have to type in the number). The button will automatically generate either [ppl-1] or [ppl-(last number used)].

If user inputs [ppl-1-says-asdf] the site will use GIPHY or Google Custom Site Search to find a picture of ppl-1 and add a custom div in that part of the story. Please see wireframe for possible configuration. It will possibly be a row aligned pair of divs with the image as well as the text on the side.

Then the user can witness the firepower of this fully armed and operational ~~battle station~~ project.

### API:

SWAPI
..* In order to play "reverse" mad-libs, the human writes the story and the computer fills in the blanks. We will use the SWAPI database to fill in many proper nouns.

GIPHY
..* For certain tags (tbd) we will allow the user to not only post a pic but we will limit it to 3 per story.

Google Custom Search Engine
..* If GIPHY fails us, we will have to resort to finding another image
..* (Using two of them: one searches Star Wars Fandom Wiki and the other searches GIPHY if we hit our GIPHY limit)

### API Snippet:
placeholder code block here 
```
  www.fakeurl.io/?q=dontclickthisplease&apikey=nopleaseno
```

### Wireframes:
Made using wireframe.cc



### MVP: 

### Post-MVP

### Goals: 

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