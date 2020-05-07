// This app will generate random questions based on
// Star Wars characters, settings and starships. 
// The results will be used to write a randomized story
// which will be shown to the reader in sequentially
// displayed divs (prev-next buttons hide and unhide). 

// Datastructures will be loaded when the window loads for 
// storing the question choices and be filled in as the
// questions are answered. 

// The asynchronous call to the APIs will be made on
// window load as well. They will also be saved in a 
// datastructure and the questions (and the divs that hold them)
// will be generated in the async function with the axios.get call

// current quiz questions
// 1. Enter your name to start - text input
// 2. Which weapon do you prefer? - generated internally
// 3. Which species are you? - species 
// 4. Who is your sidekick? - people
// 5. What starship do you fly? - starships
// 6. Who is your nemesis? - people


// generate a div, qContainer, with the 
// choices (image & words), (stretch-goal = reroll button)
// (another stretch-goal, header that remembers your answers)

// main > qContainer > question + answers
// answers > ? * answerDiv
// answerDiv > answerText + answerImg

// APIs
// SWAPI needs no API key
// url + category + id
// `https://swapi.co/api/starships/3`

// GOOGLE CSE STARWARS FANDOM
// `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:7q15mjcneyd&q=anakin&searchType=image`

// GOOGLE CSE GIPHY
// `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:v3lg89gqpit&q=anakin&searchType=image`

// start of window onload
window.onload = () => {

  // ================ VARIABLE DECLARATIONS ================== //

  // for the css star wars scroll window
  const starWarsScrollText = `
      <div class="crawl">
        <div class="title">
         <h2> STAR WARS </h2>
  
         <h3> Episode 0:  </h3>
         <h3> HTML, CSS & Javascript </h3>
        </div>
         <p>
         A long time ago, in a galaxy far, far away...
         </p>
         <p>
         A young man added Lorem Ipsum to his app, which also makes API calls to Star Wars API. 
         </p>
         <p> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis eveniet corrupti assumenda ex nisi illum
         quos voluptatibus officia beatae consequatur voluptate veritatis quae, explicabo dignissimos ea odit iure
         excepturi.
         </p>
         <p>
         The man accessed Star Wars API and pulled a bunch of data. But then Star Wars API went down and he was sad. He then used the power of Google Custom Search to search for Star Wars images online. 
         </p>
         <p>
         He then found out that the creator of SWAPI no longer maintains it, and that the Pokemon API was recommended. But the young man had already designed and coded this app, so Pokemon would be a bad fit. 
         </p>
         <p>
         He worked tirelessly until his application was working properly, and then worked on making this scrolling text. Just google "Star Wars scrolling text CSS". Many people use similar methods with the CSS properties "perspective" and "transform", and the CSS animation system. 
         </p>
         <p>
         If the application has finished loading, enter your name and try out his application. Or you can wait and watch the scroll again.
         </p>

      </div>
    `

  // query selector(s)
  const main = document.querySelector('main')
  const header = document.querySelector('header')

  // variables for setting up api loading and form submit
  let submitButton
  let apiLoadInfo = {
    qReady: 0,
    qNeeded: 4 + 3 + 3 + 2,
    qCheck: function () {

      if (this.qReady >= this.qNeeded) {
        console.log('qCheck = true')
        return true
      } else {
        console.log('qCheck = false')
        return false
      }
    },
    qAddReady: function () {
      this.qReady++
      console.log('qAddReady: qReady = ' + this.qReady)
      // this object apiLoadInfo and the functions on the bottom
      // createLoadBox and updateLoadBox are related
      // in a refactoring, would write those as methods
      updateLoadBox()
    }
  }

  // a "wheel" for setting basic colors
  const colorWheel = ['red', 'green', 'blue', 'yellow', 'purple']

  // Since we don't expect swapi to start deleting characters
  // I will hardcode the max number of each category

  const swapiMax = {
    people: 87,
    vehicles: 39,
    starships: 37,
    planets: 61,
    species: 37
  }

  // note: swapi not all starship indices work
  // 2, 3, 5, 9, 11, 15
  // const maxPeople = 87
  // const maxVehicles = 39
  // const maxStarships = 37
  // const maxPlanets = 61
  // const maxSpecies = 37


  // swapi does not have a weapon data base so I will make questions
  // based on 3 popular star wars weapons
  const weapons = [
    { text: 'Lightsaber', img: './images/img-lightsaber.png' },
    { text: 'Blaster', img: './images/img-blaster.jpg' },
    { text: 'Bowcaster', img: './images/img-bowcaster.png' }
  ]

  // Base URL List
  // swapi base url
  const urlSWAPI = `https://swapi.dev/api/`

  // google cse starwars fandom url
  const urlGcseSW = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:7q15mjcneyd&searchType=image`


  // variable for storing selected choices
  let quizSelections = {
    name: '',
    weapon: '',
    species: '',
    vehicle: '',
    sidekick: '',
    nemesis: ''
  }



  // ================ FUNCTION ================== //
  // function initializeQuiz
  function initializeQuiz() {

    // run helper functions to add divs to array called questions

    // create name input form 
    generateNameDiv()

    // create weapon quiz question
    generateQuestionDiv(
      'In the Star Wars universe, which weapon would you use?',
      weapons, 'weapon')

    // perform api call for:
    // 4 species
    // 3 sidekicks
    // 3 starships
    // 2 nemeses

    generateQDivByCat(randToArr(4, swapiMax.species), 'species', 'What species are you?', 'species', ['Human', 'Bothan', 'Wookie', 'Mon calamari'])

    const sidIndices = randToArr(3, swapiMax.species)

    generateQDivByCat(sidIndices, 'people', 'Who is your sidekick?', 'sidekick', ['Chewbacca', 'R2-D2', 'Anakin Skywalker'])

    generateQDivByCat(randToArr(3, swapiMax.starships), 'starships', 'Which starship do you pilot?', 'starship', ['X-wing', 'Slave One', 'Imperial Class Star Destroyer'])

    // need to go back and check against sidekicks to prevent 
    // repeat characters from showing up
    let nemIndices = []
    for (let i = 0; i < 2; i++) {
      let currNum = Math.floor(Math.random() * swapiMax.people) + 1
      while (nemIndices.includes(currNum) || sidIndices.includes(currNum)) {
        currNum = Math.floor(Math.random() * swapiMax.people) + 1
      }
      nemIndices.push(currNum)
    }
    generateQDivByCat(nemIndices, 'people', 'Who is your ultimate nemesis?', 'nemesis', ['General Grievous', 'Obi-Wan Kenobi'])


    // try to make a hidden div that comes after questions
    // storyCreator(quizSelections)

    generateQuestionDiv(`
    Thanks for answering! \n
    We've processed your answers! \n
    Press "Start" to start!`, [{ text: '', img: './images/start.png' }], 'div', storyCreator)


  } // end of function initializeQuiz


  // ================ FUNCTION ================== //
  // function for generating a div for receiving name input 
  function generateNameDiv() {

    // create structure as detailed in comments on top 
    const qContainer = document.createElement('div')
    qContainer.className = 'qContainer'

    const question = document.createElement('h2')
    question.className = 'question'
    question.innerText = `What is your name?`
    qContainer.append(question)

    // answers is a containder div with flex styling we use everywhere 
    // we can specify this answers as a form instead of div 
    const answers = document.createElement('form')
    answers.className = 'answers'
    qContainer.style.alignItems = 'center'
    qContainer.append(answers)

    // add an input for the name to go into 
    const answerInput = document.createElement('input')
    answerInput.className = 'answerInput'
    answerInput.type = 'text'
    answerInput.setAttribute('placeholder', 'Type your name here')
    answers.append(answerInput)

    // then add a submit button 
    submitButton = document.createElement('button')

    if (apiLoadInfo.qCheck()) {
      submitButton.disabled = false
      submitButton.innerText = 'Submit!'
    } else {
      submitButton.disabled = true
      submitButton.innerText = 'Loading...'
    }
    answers.append(submitButton)

    answers.addEventListener('submit', (evt) => {
      evt.preventDefault()
      if (answerInput.value && apiLoadInfo.qCheck()) {
        console.log(answerInput.value)
        quizSelections.name = (answerInput.value.toUpperCase())
        nextSibClass(answerInput, 'qContainer')
      } else {
        console.log("Name couldn't submit")
      }
    })

    // add a loading box to indicate which API calls returned 
    answers.append(createLoadBox(apiLoadInfo.qNeeded))

    // add a text scroll to the container
    const starWarsScroll = document.createElement('section')
    starWarsScroll.className = 'starwars'
    starWarsScroll.innerHTML = starWarsScrollText
    qContainer.append(starWarsScroll)

    // add the whole thing to main 
    main.append(qContainer)
    return qContainer

  } // end of function generateNameDiv


  // ================ FUNCTION ================== //
  // function generateQuestionDiv()
  function generateQuestionDiv(qStr, aArr, qType, myFunc) {
    // the parameters are question as a string
    // and possible answers as arguments
    if (aArr.length <= 0) {
      return ''
    }

    // create structure as detailed in comments on top 
    const qContainer = document.createElement('div')
    qContainer.className = 'qContainer'
    qContainer.style.display = 'none'

    const question = document.createElement('h2')
    question.className = 'question'
    question.innerText = qStr
    qContainer.append(question)

    const answers = document.createElement('div')
    answers.className = 'answers'
    qContainer.append(answers)

    let colorInd = 0

    // for each answer choice make a new answer button
    // aArr should be an array holding objects of the form:
    // {text: textStr, img: srcStr}
    aArr.forEach((ans, ind) => {
      const answerDiv = document.createElement('div')
      answerDiv.className = 'answerDiv'

      const answerText = document.createElement('h3')
      answerText.className = 'answerText'
      answerText.innerText = ans.text

      const imgHolder = document.createElement('div')
      imgHolder.className = 'imgHolder'
      imgHolder.style.borderColor = colorWheel[colorInd]
      colorInd++

      const answerImg = document.createElement('img')
      answerImg.className = 'answerImg'
      answerImg.setAttribute('src', ans.img)
      answerImg.setAttribute('alt', ans.text)
      imgHolder.append(answerImg)


      answerImg.addEventListener('click', () => {
        // add functionality to the image so that
        // it acts as a button 
        if (myFunc) {
          // if you supply a function as argument it will perform it 
          myFunc()
        } else {
          // else it will add the quiz answer to the object
          quizSelections[qType] = {
            text: ans.text.toUpperCase(),
            img: ans.img
          }
          console.log(quizSelections)
        }


        header.scrollIntoView()
        nextSibClass(answers, 'qContainer', 'flex')

      })

      answerDiv.append(answerText)
      answerDiv.append(imgHolder)
      answers.append(answerDiv)
    })

    main.append(qContainer)
    return qContainer
  } // end of function generateQuestionDiv


  // ================ FUNCTION ================== //
  // function generateQDivByCat()
  // calls generateQuestionDiv to make the divs as before
  // but makes api calls based on the categories available on SWAPI
  // then makes api calls to google cse to grab an image
  // and inserts those values and images into the answer buttons
  // from answerDivs made in generateQuestionDiv()
  function generateQDivByCat(nums, qType, qStr, qRecord, qDefaults) {
    // this function calls swapi and accesses a category
    // because many categories are issing individual id's
    // this looks at what's available


    // for finding the next free answerDiv via iterating indices
    let ansInd = 0


    // then we call that page using this url structure:
    // https://swapi.co/api/starships/?page=1
    const randNums = nums

    // we create an array of empty objects (but with the right keys)
    // because we need to fill them in after the api call 
    const emptyObjArr = nums.map(() => {
      return {
        text: '', img: ''
      }
    })

    // create the divs we want to use 
    const qContainer = generateQuestionDiv(qStr, emptyObjArr, qType, () => {
      // do nothing
    })

    // follow the dom tree down the following structure 
    // qContainer > answers > (multiple answerDiv-s)
    // if answerDiv > answerText has empty string innerText
    // then we need to add text and an image 

    const answers = childrenWithClass(qContainer, 'answers')[0]
    const answerDivs = childrenWithClass(answers, 'answerDiv')

    // for each random index number from randNums
    // make an api call
    for (let i = 0; i < randNums.length; i++) {
      // first, each page holds ten things so we pick a page
      const page = Math.floor(randNums[i] / 10) + 1
      const ind = randNums[i] % 10
      try {

        axios.get(urlSWAPI + qType + '/?page=' + page)
          .then((res) => {
            // console.log(res)
            return res.data.results
          }).then((results) => {

            // ind is the index once you are on the right page of 10
            console.log('Accessed SWAPI')
            return { text: results[ind].name }

          })
          .catch((er) => {
            console.log(er)

            return { text: qDefaults[i] }
          })
          .then((queryObj) => {

            axios.get(urlGcseSW + '&q=' + queryObj.text)
              .then((res) => {
                // console.log(res)
                const queryImg = res.data.items[0].link
                queryObj.img = queryImg

                console.log('Accessed Google CSE')
                // console.log(queryObj)
                return queryObj
              }).catch((er) => {

                // if google search doesnt work
                // use no image (the image is replaced by text)

                console.log(er)

                queryObj.img = ''

                return queryObj

              }).then((ans) => {
                // for each answer choice (using ansInd)
                // go to the next available answerDiv

                // console.log(ans)
                // console.log(ans.img)

                const answerDiv = answerDivs[ansInd]
                ansInd++

                const answerText = childrenWithClass(answerDiv, 'answerText')[0]
                answerText.innerText = ans.text

                const imgHolder = childrenWithClass(answerDiv, 'imgHolder')[0]


                // remove the existing answerImg which is empty 
                childrenWithClass(imgHolder, 'answerImg')[0].remove()

                // if there is an image then add it to imageHolder
                // or else a text div is added
                if (ans.img) {
                  const answerImg = document.createElement('img')
                  answerImg.className = 'answerImg'
                  answerImg.setAttribute('src', ans.img)
                  answerImg.setAttribute('alt', ans.text)
                  imgHolder.append(answerImg)
                } else {
                  const answerImgSub = document.createElement('div')
                  answerImgSub.className = 'answerImgSub'
                  answerImgSub.innerText = ans.text.toUpperCase()
                  imgHolder.append(answerImgSub)
                }


                imgHolder.addEventListener('click', () => {
                  // add functionality to the image so that
                  // it acts as a button 
                  quizSelections[qRecord] = {
                    text: ans.text.toUpperCase(),
                    img: ans.img
                  }
                  header.scrollIntoView()
                  nextSibClass(answers, 'qContainer', 'flex')
                  console.log(quizSelections)
                })

                // at the end of 4+3+3+2 calls 
                // the submit button should be enabled
                apiLoadInfo.qAddReady()
                if (apiLoadInfo.qCheck()) {
                  submitButton.disabled = false
                  submitButton.innerText = 'Submit!'
                }
              }) // end of then

          })


      }
      catch (er) { // catch for the first try for SWAPI axios call 
        console.log(er)
      }
    } // end of for loop over num 

    return qContainer
  } // end of function generateQDivByCat


  // ================ FUNCTION ================== //
  // function nextSibClass - hide this element's question div and activate next sibling question div
  // we float up the tree of the dom until we run into qContainer 

  function nextSibClass(childElem, whichClass, whichDisp) {
    // search for the parent with whichClass 
    let currElem = childElem
    // console.log(currElem.className)
    while (currElem && currElem.className !== whichClass) {
      currElem = currElem.parentNode
      // console.log(currElem.className)
    }

    // console.log(currElem)

    // if you don't reach the top (body or above)
    // change parent to not be displayed and make the next 
    // sibling to the parent to be displayed
    if (currElem && currElem.className !== 'body') {
      currElem.style.display = "none"
      if (currElem.nextElementSibling) {
        currElem.nextElementSibling.style.display = (whichDisp ? whichDisp : 'inline-block')
        return true
      }
      return false

    } else {
      return false
    }

  } // end of function nextSibClass


  // ================ FUNCTION ================== //
  // function to make an array of N different choices
  // out of a max number (from 1 to the max number)
  // while not having re-picks of the same number
  function randToArr(numPicks, maxVal) {

    let prevChoices = []

    for (let i = 1; i <= numPicks; i++) {
      let newPick = Math.round(Math.random() * (maxVal - 1)) + 1
      while (prevChoices.includes(newPick)) {
        newPick = Math.round(Math.random() * (maxVal - 1)) + 1
      }
      prevChoices.push(newPick)
    }

    return prevChoices

  } // end randToArr function 


  // ================ FUNCTION ================== //
  // function quickly creates an element with given class and type
  // and appends it to specified parent element 
  function createElemWParent(attachParent, sClass, elemType) {
    // attachDiv is the div the story div attaches to 
    const elem = document.createElement(elemType)
    elem.className = sClass
    attachParent.append(elem)

    return elem
  } // end createElemWParent


  // ================ FUNCTION ================== //
  // function to return array of children elements but only 
  // if they have a certain class 
  function childrenWithClass(parentElem, sClass) {
    // quickly use children to get all child elements
    // then use .contains to check their classList
    let result = []

    let childrenList = parentElem.children
    // console.log(childrenList)

    for (let i = 0; i < childrenList.length; i++) {
      // console.log(childrenList[i])
      if (childrenList[i].classList.contains(sClass)) {
        result.push(childrenList[i])
      }
    }

    return result

  }

  // ================ FUNCTION ================== //
  // function to make story divs (calls helper functions)
  function storyCreator() {
    console.log('starting storyCreator')

    // we take the answers from the quiz and use them to make our story
    const s = quizSelections

    // create an array of strings that define what we want to show
    const storyStrs = createStrs()

    createStoryPage(storyStrs[0], [s.starship.img], '')
    createStoryPage(storyStrs[1], [s.sidekick.img, s.species.img], 'sCircle')
    createStoryPage(storyStrs[2], ['./images/space-battle.gif'], '')
    createStoryPage(storyStrs[3], ['./images/stormtroopers.gif'], '')
    createStoryPage(storyStrs[4], [s.nemesis.img], 'sCircle')
    createStoryPage(storyStrs[5], [s.species.img, s.weapon.img, s.nemesis.img], 'sCircle')
    createStoryPage(storyStrs[6], ['./images/palpatine-hate.gif'], 'sHolo')
    generateQuestionDiv(`Who is this mysterious overlord? \n
    To be continued? \n
    To play again, hit "Restart"!
    `, [{ text: '', img: './images/restart.png' }], 'div', restart)
  } // end of storyCreator (aggregates helper functions)

  // ================ FUNCTION ================== //
  // function that refreshes page
  // current functionality of the restart button in the app 
  function restart() {
    location.reload()
  }

  // ================ FUNCTION ================== //
  // function that creates an array of strings using quizSelections
  // in post MVP there would either be multiple versions of this function
  // or conditionals within this function to have multiple story outcomes
  function createStrs() {

    let result = []

    const s = quizSelections

    // page 1
    result.push(`
    Our hero, ${s.name}, exits hyperspace in his recently repaired ${s.starship.text}. He looks at his nav computer for the rendevous point with the rebel alliance fleet. ${s.name} is at the planet CORELLIA, which is currently under siege. \n

    The imperial blockade over CORELLIA has lasted over a month. A ring of STAR DESTROYERS ominously orbits around the planet, while more and more rebel ships assemble at the edge of the system. 
    `)

    // page 2
    result.push(`
      ${s.name} hears comm static start buzzing from the console. \n

      ${s.sidekick.text}: "Hey! ${s.sidekick.text} here! T-minus 2 minutes until rendevous point! ADMIRAL ACKBAR is hailing all ships. Main fleet will engage in a wedge formation. The primary target is their flagship star destroyer, commanded by ${s.nemesis.text}." \n

      ${s.name}: "${s.nemesis.text}, you say? If only we could take out ${s.nemesis.text} in this operation and bring peace to the galaxy!" \n

      ${s.sidekick.text}: "Stay calm, ${s.name}. ${s.nemesis.text}'S betrayal hurt us all greatly, but don't do anything rash!"
    `)

    // page 3
    result.push(`
      The space battle begins over CORELLIA. Rebel cruisers enter the firing range of the star destroyers, and turbolaser volleys are exchanged. \n 

      ${s.name} opens a channel to ${s.sidekick.text}. "Hey, we need to make a run at their flagship! Wait for ADMIRAL ACKBAR to draw their fire!" \n

      ${s.sidekick.text}: "${s.name}, you crazy nerf-herder! There's got to be a hundred TIE fighters defending that one ship!" \n

      ${s.name}: "Don't worry. Avoid the dogfights and go straight for the docking bay. Follow the rebel X-wing squadrons in and break off as they attack the shield generators. TIEs will stick on them."
    `)

    // page 4 
    result.push(`
      After crashing into the docking bay, ${s.name} and ${s.sidekick.text} pull out their ${s.weapon.text}S and run towards the bay doors. \n 

      Suddenly, the doors slide open and dozens of stormtroopers brandish their rifles. \n 

      ${s.name}: "Looks like we're gonna have to do this the hard way." \n

      ${s.sidekick.text}: "Didn't realize there was an easy way!"
    `)

    // page 5 
    result.push(`
      ${s.name} and ${s.sidekick.text} engage the stormtroopers in the hangar and leave a mess of bodies on the ground. In the commotion, a presence makes itself known and all the remaining stormtroopers quickly retreat and take cover in adjacent rooms. \n

      ${s.nemesis.text}: "${s.name}, is it? It has been too long." \n

      ${s.name}: "${s.nemesis.text}! I was going to come look for you but you brought yourself to me." sneered ${s.name}.
    `)

    // page 6
    result.push(`
      ${s.name} and ${s.nemesis.text} tighten their grips on their ${s.weapon.text}S. \n 
      ${s.nemesis.text} smiles menacingly. \n
      ${s.nemesis.text}: "Fitting to settle this with a duel, isn't it?"

      ${s.name}: "You're here to chat? Or fight?"  \n 

      Sparks fly around the room as both combatants brandish their weapons. 
    `)

    // page 7 
    result.push(`
      ${s.nemesis.text} falls to the ground with a smoking wound in their torso. \n 
      ${s.name} walks closer with his ${s.weapon.text} raised. \n
      ${s.name}: "Any last words?" \n 
      ${s.nemesis.text} gives ${s.name} a condescending look. \n
      ${s.nemesis.text}: "You will never understand the power of the dark side of the force." But ${s.nemesis.text} barely has any breath left, struggling to speak these words. \n 

      ${s.name} turns to ${s.sidekick.text}. \n
      ${s.name}: "Call it in to ADMIRAL ACKBAR. We've finally defeated ${s.nemesis.text}. Have them send some ships to capture this flagship." \n 

      Suddenly the holographic projector on the wall activates. \n 
      "You think it is so easy to defeat the dark side? We shall see, my friend. Huehuehue..." 

    `)


    return result
  } // end of createStrs

  // ================ FUNCTION ================== //
  // function that takes story info and turns it into a div 
  // similar to generateQuestionDiv(...)
  function createStoryPage(storyStr, sImgPaths, sImgClass, btn) {
    // default sImgClass is empty, and appears with slight border-radius
    // current option is sCircle adder class which has border-radius 50%

    const sContainer = createElemWParent(main, 'sContainer', 'div')
    sContainer.style.display = 'none'

    // image container 
    const sImgCont = createElemWParent(sContainer, 'sImgCont', 'div')

    for (sImgPath of sImgPaths) {
      // if img path exists
      if (sImgPath) {
        // create an image with class sImg 
        const sImgDiv = createElemWParent(sImgCont, 'sImgDiv', 'div')
        const sImg = createElemWParent(sImgDiv, 'sImg', 'img')
        sImg.setAttribute('src', sImgPath)
        sImg.setAttribute('alt', sImgPath)
        if (sImgClass) {
          sImgDiv.className += ' ' + sImgClass
        }
      }
    }

    // create a paragraph with our text in it
    const sParagraph = createElemWParent(sContainer, 'sParagraph', 'div')
    sParagraph.innerText = storyStr

    // create button to go to next part
    const sButton = createElemWParent(sContainer, 'sButton', 'div')
    sButton.innerText = btn ? btn.text : 'Next!'
    sButton.addEventListener('click', () => {
      if (!btn) {
        header.scrollIntoView()
        nextSibClass(sButton, 'sContainer', 'flex')
      } else {
        btn.eventFunc()
      }

    })

  } // end of createStory 

  // ================ FUNCTION ================== //
  // loading box that shows the number of qReady in apiLoadInfo
  function createLoadBox(numLoads) {
    const loadBox = document.createElement('div')
    loadBox.className = 'loadBox'


    for (let i = 0; i < numLoads; i++) {
      const loadBullet = document.createElement('span')
      loadBullet.className = 'loadBullet'
      loadBullet.innerText = '.'
      loadBox.append(loadBullet)
    }


    return loadBox
  } // end of createLoadBox


  // ================ FUNCTION ================== //
  // loading box updating function that shows qReady in apiLoadInfo 
  // when the "loading bar" is full then all api calls were made
  // whether they failed or not, the app will run with dummy data if necessary
  // each loadBullet has a different character depending on if that
  // api call is finished or not (so partial loading looks like  |||||....... )
  function updateLoadBox() {
    // reads qReady from apiLoadInfo and changes the loadBullets
    // in loadBox 

    const loadBox = document.querySelector('.loadBox')
    // assumes loadBox has structure of only .loadBullets
    const loadBullets = loadBox.children

    for (let i = 0; i < loadBullets.length; i++) {
      // qReady starts at 0 and ends at 12
      // at 0 ready, none of the elements should be adjusted
      // so we compare using < instead of <= 
      if (i < apiLoadInfo.qReady) {
        loadBullets[i].innerText = '|'
      } else {
        loadBullets[i].innerText = '.'
      }
    }

    // hide the loading info if loaded 
    if (loadBullets.length <= apiLoadInfo.qReady) {
      // console.log('Checking for loadBox: ' + apiLoadInfo.qReady)
      loadBox.innerHTML = ''
    }

  } // end of updateLoadBox


  // onload, run async function initializeQuiz
  initializeQuiz()

} // end of window onload