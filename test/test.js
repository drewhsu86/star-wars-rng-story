// test api calls

let testURL

// swapi

testURL = `https://swapi.co/api/starships/3`

// giphy

// testURL = `https://api.giphy.com/v1/gifs/search?api_key=un0aXOmo2kxpmU3ZwQeEpjFtPbxvr1DO&q=anakin&limit=25&offset=0&rating=G&lang=en`

// google custom search - giphy

// testURL = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:v3lg89gqpit&q=anakin&searchType=image`

// recipe puppy

// testURL = 'http://www.recipepuppy.com/api/?i=onions,tomato&q=omelet&p=3'

// testURL = "./test.json"

// google custom search - star wars fandom

testURL = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBX078uQwSqNAc0bdQZVK5v0qVJCFYace8&cx=015933299778943018564:7q15mjcneyd
&q=anakin&searchType=image`


async function axiosCallTest(URL) {

  try {
    const response = await axios.get(URL)


    console.log(response)
  }
  catch (er) {
    console.log(er)
  }
}

axiosCallTest(testURL)