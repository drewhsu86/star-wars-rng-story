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

// GIPHY
// `https://api.giphy.com/v1/gifs/search?api_key=un0aXOmo2kxpmU3ZwQeEpjFtPbxvr1DO&q=anakin&limit=25&offset=0&rating=G&lang=en`

// GOOGLE CSE STARWARS FANDOM
// `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:7q15mjcneyd&q=anakin&searchType=image`

// GOOGLE CSE GIPHY
// `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:v3lg89gqpit&q=anakin&searchType=image`

// start of window onload
window.onload = () => {
  // query selector(s)
  const main = document.querySelector('main')
  const header = document.querySelector('header')

  // a "wheel" for setting basic colors
  const colorWheel = ['red', 'green', 'blue', 'yellow', 'purple']

  // Since we don't expect swapi to start deleting characters
  // I will hardcode the max number of each category

  // note: swapi not all starship indices work
  // 2, 3, 5, 9, 11, 15
  const maxPeople = 87
  const maxVehicles = 39
  const maxStarships = 37
  const maxPlanets = 61
  const maxSpecies = 37

  const weapons = [
    { text: 'Lightsaber', img: './images/img-lightsaber.png' },
    { text: 'Blaster', img: './images/img-blaster.jpg' },
    { text: 'Bowcaster', img: './images/img-bowcaster.png' }
  ]

  // swapi base url
  const urlSWAPI = `https://swapi.co/api/`

  // giphy base url 
  const urlGIPHY = `https://api.giphy.com/v1/gifs/search?api_key=un0aXOmo2kxpmU3ZwQeEpjFtPbxvr1DO&limit=25&offset=0&rating=G&lang=en`

  // google cse starwars fandom url
  const urlGcseSW = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:7q15mjcneyd&searchType=image`

  // google cse giphy url 
  const urlGcseGIPHY = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:v3lg89gqpit&searchType=image`



  // variables for storing selected choices
  let quizSelections = {
    name: '',
    weapon: '',
    species: '',
    vehicle: '',
    sidekick: '',
    nemesis: ''
  }
  let storySelections = {

  }


  // onload, run async function initializeQuiz
  initializeQuiz()






  // function initializeQuiz
  function initializeQuiz() {

    let questions = []



    // run helper functions to add divs to array called questions

    questions.push(generateNameDiv())
    questions.push(generateQuestionDiv(
      'In the Star Wars universe, which weapon would you use?',
      weapons, 'weapon'))

    questions.forEach((qstn) => {
      main.append(qstn)
    })

    // perform api call for:
    // 4 species
    // 3 sidekicks
    // 3 starships
    // 2 nemeses

    // queryAPIs(4, maxSpecies, 'species', 'What species are you?')
    generateQDivByCat(4, 'species', maxSpecies, 'What species are you?')
    generateQDivByCat(3, 'people', maxStarships, 'Who is your sidekick?')
    generateQDivByCat(3, 'starships', maxStarships, 'Which starship do you pilot?')
    generateQDivByCat(2, 'people', maxStarships, 'Who is ultimate nemesis?')


    // because of async nature, when the second question is answered the other divs should be constructed 



  } // end of function initializeQuiz

  function generateNameDiv() {

    // create structure as detailed in comments on top 
    const qContainer = document.createElement('div')
    qContainer.className = 'qContainer'

    const question = document.createElement('h2')
    question.className = 'question'
    question.innerText = `What is your name?`
    qContainer.append(question)

    const answers = document.createElement('form')
    answers.className = 'answers'
    qContainer.append(answers)

    const answerInput = document.createElement('input')
    answerInput.className = 'answerInput'
    answerInput.type = 'text'
    answerInput.setAttribute('placeholder', 'Type your name here')
    answers.append(answerInput)

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Submit!'
    answers.append(submitButton)

    answers.addEventListener('submit', (evt) => {
      evt.preventDefault()
      if (answerInput.value) {
        console.log(answerInput.value)
        quizSelections.name = (answerInput.value.toUpperCase())
        nextSibClass(answerInput, 'qContainer')
      }
    })

    return qContainer

  } // end of function generateNameDiv


  // function generateQuestionDiv()
  function generateQuestionDiv(qStr, aArr, qType) {
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
      imgHolder.style.borderColor = colorWheel[ind]

      const answerImg = document.createElement('img')
      answerImg.className = 'answerImg'
      answerImg.setAttribute('src', ans.img)
      imgHolder.append(answerImg)


      answerImg.addEventListener('click', () => {
        // add functionality to the image so that
        // it acts as a button 
        quizSelections[qType] = {
          text: ans.text.toUpperCase(),
          img: ans.img
        }
        header.scrollIntoView()
        nextSibClass(answers, 'qContainer')
        console.log(quizSelections)
      })

      answerDiv.append(answerText)
      answerDiv.append(imgHolder)
      answers.append(answerDiv)
    })

    return qContainer
  } // end of function generateQuestionDiv


  // function generateQuestionDiv()
  function generateQDivByCat(num, qType, qMax, qStr) {
    // this function calls swapi and accesses a category
    // because many categories are issing individual id's
    // this looks at what's available

    // create structure as detailed in comments on top 
    const qContainer = document.createElement('div')
    qContainer.className = 'qContainer'
    qContainer.style.display = 'none'
    main.append(qContainer)

    const question = document.createElement('h2')
    question.className = 'question'
    question.innerText = qStr
    qContainer.append(question)

    const answers = document.createElement('div')
    answers.className = 'answers'
    qContainer.append(answers)

    let colorInd = 0 // for colorwheel iteration


    // then we call that page using this url structure:
    // https://swapi.co/api/starships/?page=1
    const randNums = randToArr(num, qMax)

    for (randNum of randNums) {
      // first, each page holds ten things so we pick a page
      const page = Math.floor(randNum / 10) + 1
      const ind = randNum % 10
      try {
        axios.get(urlSWAPI + qType + '/?page=' + page)
          .then((res) => {
            // console.log(res)
            return res.data.results
          }).then((results) => {

            // ind is the index once you are on the right page of 10

            return { text: results[ind].name }

          }).then((queryObj) => {

            axios.get(urlGcseSW + '&q=' + queryObj.text)
              .then((res) => {
                // console.log(res)
                const queryImg = res.data.items[0].link
                queryObj.img = queryImg

                return queryObj
              }).then((ans) => {
                // for each answer choice make a new answer button
                // aArr should be an array holding objects of the form:
                // {text: textStr, img: srcStr}

                // console.log(ans)
                // console.log(ans.img)

                const answerDiv = document.createElement('div')
                answerDiv.className = 'answerDiv'

                const answerText = document.createElement('h3')
                answerText.className = 'answerText'
                answerText.innerText = ans.text

                const imgHolder = document.createElement('div')
                imgHolder.className = 'imgHolder'
                imgHolder.style.borderColor = colorWheel[ind]
                colorInd++

                const answerImg = document.createElement('img')
                answerImg.className = 'answerImg'
                answerImg.setAttribute('src', ans.img)
                imgHolder.append(answerImg)


                imgHolder.addEventListener('click', () => {
                  // add functionality to the image so that
                  // it acts as a button 
                  quizSelections[qType] = {
                    text: ans.text.toUpperCase(),
                    img: ans.img
                  }
                  header.scrollIntoView()
                  nextSibClass(answers, 'qContainer')
                  console.log(quizSelections)
                })

                answerDiv.append(answerText)
                answerDiv.append(imgHolder)
                answers.append(answerDiv)

              }) // end of then/finally

          })


      }
      catch (er) {
        console.log(er)
      }
    } // end of for loop over num 

    return qContainer
  } // end of function generateQDivByCat


  // function nextSibClass - hide this element's question div and activate next sibling question div
  // we float up the tree of the dom until we run into qContainer 

  function nextSibClass(childElem, whichClass) {
    let currElem = childElem
    // console.log(currElem.className)
    while (currElem && currElem.className !== whichClass) {
      currElem = currElem.parentNode
      // console.log(currElem.className)
    }

    // console.log(currElem)

    if (currElem && currElem.className !== 'body') {
      currElem.style.display = "none"
      if (currElem.nextElementSibling) {
        currElem.nextElementSibling.style.display = "inline-block"
        return true
      }
      return false

    } else {
      return false
    }

  } // end of function nextSibClass


  // function to make an array of 4 different choices
  // out of a max number (from 1 to the max number)
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

  }






} // end of window onload