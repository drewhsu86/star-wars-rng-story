# API endpoint testing

### 1. SWAPI

 *BaseURL: https://swapi.co/  
 *No API Key Required  
 *API Call:  BaseURL/category/entry  
 category = 'people', 'planet', 'starship', 'films', 'vehicles', 'species'
 *entry = positive number less than or equal to the max count in database

 example of searching a particular entry:  
``` 
  https://swapi.co/api/planets/5/
```
 where category = 'planet' and number = '5'  

 example response:
```
  {
    "name": "Dagobah",
    "rotation_period": "23",
    "orbital_period": "341",
    "diameter": "8900",
    "climate": "murky",
    "gravity": "N/A",
    "terrain": "swamp, jungles",
    "surface_water": "8",
    "population": "unknown",
    "residents": [],
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-10T11:42:22.590000Z",
    "edited": "2014-12-20T20:58:18.425000Z",
    "url": "https://swapi.co/api/planets/5/"
  }
```

 example of searching a particular category:  
``` 
  https://swapi.co/api/species/
```

 As one can see in the category search, it returns the array "results" in the data which has all the species as their own objects.

 example response:  
```
{
    "count": 37,
    "next": "https://swapi.co/api/species/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Hutt",
            "classification": "gastropod",
            "designation": "sentient",
            "average_height": "300",
            "skin_colors": "green, brown, tan",
            "hair_colors": "n/a",
            "eye_colors": "yellow, red",
            "average_lifespan": "1000",
            "homeworld": "https://swapi.co/api/planets/24/",
            "language": "Huttese",
            "people": [
                "https://swapi.co/api/people/16/"
            ],
            "films": [
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T17:12:50.410000Z",
            "edited": "2014-12-20T21:36:42.146000Z",
            "url": "https://swapi.co/api/species/5/"
        },
        {
            "name": "Yoda's species",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "66",
            "skin_colors": "green, yellow",
            "hair_colors": "brown, white",
            "eye_colors": "brown, green, yellow",
            "average_lifespan": "900",
            "homeworld": "https://swapi.co/api/planets/28/",
            "language": "Galactic basic",
            "people": [
                "https://swapi.co/api/people/20/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-15T12:27:22.877000Z",
            "edited": "2014-12-20T21:36:42.148000Z",
            "url": "https://swapi.co/api/species/6/"
        },
        {
            "name": "Trandoshan",
            "classification": "reptile",
            "designation": "sentient",
            "average_height": "200",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "yellow, orange",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/29/",
            "language": "Dosh",
            "people": [
                "https://swapi.co/api/people/24/"
            ],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-15T13:07:47.704000Z",
            "edited": "2014-12-20T21:36:42.151000Z",
            "url": "https://swapi.co/api/species/7/"
        },
        {
            "name": "Mon Calamari",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "160",
            "skin_colors": "red, blue, brown, magenta",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/31/",
            "language": "Mon Calamarian",
            "people": [
                "https://swapi.co/api/people/27/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:09:52.263000Z",
            "edited": "2014-12-20T21:36:42.153000Z",
            "url": "https://swapi.co/api/species/8/"
        },
        {
            "name": "Ewok",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown",
            "hair_colors": "white, brown, black",
            "eye_colors": "orange, brown",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/7/",
            "language": "Ewokese",
            "people": [
                "https://swapi.co/api/people/30/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:22:00.285000Z",
            "edited": "2014-12-20T21:36:42.155000Z",
            "url": "https://swapi.co/api/species/9/"
        },
        {
            "name": "Sullustan",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "pale",
            "hair_colors": "none",
            "eye_colors": "black",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/33/",
            "language": "Sullutese",
            "people": [
                "https://swapi.co/api/people/31/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:26:20.103000Z",
            "edited": "2014-12-20T21:36:42.157000Z",
            "url": "https://swapi.co/api/species/10/"
        },
        {
            "name": "Neimodian",
            "classification": "unknown",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "grey, green",
            "hair_colors": "none",
            "eye_colors": "red, pink",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/18/",
            "language": "Neimoidia",
            "people": [
                "https://swapi.co/api/people/33/"
            ],
            "films": [
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:07:31.319000Z",
            "edited": "2014-12-20T21:36:42.160000Z",
            "url": "https://swapi.co/api/species/11/"
        },
        {
            "name": "Gungan",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "190",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "orange",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/8/",
            "language": "Gungan basic",
            "people": [
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/37/",
                "https://swapi.co/api/people/38/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:30:37.341000Z",
            "edited": "2014-12-20T21:36:42.163000Z",
            "url": "https://swapi.co/api/species/12/"
        },
        {
            "name": "Toydarian",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "120",
            "skin_colors": "blue, green, grey",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "91",
            "homeworld": "https://swapi.co/api/planets/34/",
            "language": "Toydarian",
            "people": [
                "https://swapi.co/api/people/40/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:48:56.893000Z",
            "edited": "2014-12-20T21:36:42.165000Z",
            "url": "https://swapi.co/api/species/13/"
        },
        {
            "name": "Dug",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown, purple, grey, red",
            "hair_colors": "none",
            "eye_colors": "yellow, blue",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/35/",
            "language": "Dugese",
            "people": [
                "https://swapi.co/api/people/41/"
            ],
            "films": [
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:53:11.214000Z",
            "edited": "2014-12-20T21:36:42.167000Z",
            "url": "https://swapi.co/api/species/14/"
        }
    ]
}
```

 should be noted that there are more results, on an endpoint with '?=page=2' under the key "next". This probably goes on until all 37 species is listed (so one object doesn't become too long)

---

### 2. GIPHY
I signed up for a free API key after signing up for an account.  

[https://developers.giphy.com/explorer](https://developers.giphy.com/explorer) lets users try out API calls (with their key)

 *Base URL: https://api.giphy.com/v1/gifs/search?  
 *API key: I hide for now, call it 'myKey'  
 *query: '&q=' + [some search term]  
 *other parameters: &limit=25&offset=0&rating=G&lang=en  
 these parameters pertains to search results and etc. that I won't mess with

 example (query 'anakin'):  
```
https://api.giphy.com/v1/gifs/search?api_key=myKey&q=anakin&limit=25&offset=0&rating=G&lang=en
```

 example response (curtailed):  
```
{
    "data": [
        {
            "type": "gif",
            "id": "Mo9nI2yBKp3RC",
            "url": "https://giphy.com/gifs/anakin-Mo9nI2yBKp3RC",
            "slug": "anakin-Mo9nI2yBKp3RC",
            "bitly_gif_url": "https://gph.is/2eD1u3T",
            "bitly_url": "https://gph.is/2eD1u3T",
            "embed_url": "https://giphy.com/embed/Mo9nI2yBKp3RC",
            "username": "",
            "source": "https://boards.theforce.net/threads/rethink-your-life-the-pt-social-thread-image-and-gif-heavy.50038384/page-72",
            "title": "anakin GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "boards.theforce.net",
            "source_post_url": "https://boards.theforce.net/threads/rethink-your-life-the-pt-social-thread-image-and-gif-heavy.50038384/page-72",
            "is_sticker": 0,
            "import_datetime": "2016-10-18 23:04:37",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "downsized_large": {
                    "height": "318",
                    "size": "2065546",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.gif",
                    "width": "335"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "size": "8417",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100_s.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100_s.gif",
                    "width": "106"
                },
                "original": {
                    "frames": "30",
                    "hash": "1c28b8e1c4eac0cf9c7acabac25fe6a1",
                    "height": "318",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.mp4",
                    "mp4_size": "194466",
                    "size": "2065546",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.webp",
                    "webp_size": "464844",
                    "width": "335"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "size": "159423",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200_d.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200_d.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200_d.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200_d.webp",
                    "webp_size": "47232",
                    "width": "211"
                },
                "downsized_still": {
                    "height": "237",
                    "size": "37526",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy-downsized_s.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy-downsized_s.gif",
                    "width": "250"
                },
                "fixed_height_still": {
                    "height": "200",
                    "size": "27093",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200_s.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200_s.gif",
                    "width": "211"
                },
                "downsized_medium": {
                    "height": "318",
                    "size": "2065546",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.gif",
                    "width": "335"
                },
                "downsized": {
                    "height": "237",
                    "size": "1104724",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy-downsized.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy-downsized.gif",
                    "width": "250"
                },
                "fixed_height_small": {
                    "height": "100",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100.mp4",
                    "mp4_size": "21026",
                    "size": "237370",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100.webp",
                    "webp_size": "82148",
                    "width": "106"
                },
                "original_mp4": {
                    "height": "454",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.mp4",
                    "mp4_size": "194466",
                    "width": "480"
                },
                "fixed_width_small": {
                    "height": "95",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100w.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100w.mp4",
                    "mp4_size": "18411",
                    "size": "219124",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100w.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100w.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100w.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100w.webp",
                    "webp_size": "75766",
                    "width": "100"
                },
                "downsized_small": {
                    "height": "318",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy-downsized-small.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy-downsized-small.mp4",
                    "mp4_size": "133677",
                    "width": "334"
                },
                "preview": {
                    "height": "208",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy-preview.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy-preview.mp4",
                    "mp4_size": "37888",
                    "width": "220"
                },
                "fixed_width_downsampled": {
                    "height": "190",
                    "size": "144989",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200w_d.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200w_d.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200w_d.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200w_d.webp",
                    "webp_size": "43144",
                    "width": "200"
                },
                "fixed_width_small_still": {
                    "height": "95",
                    "size": "7748",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/100w_s.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=100w_s.gif",
                    "width": "100"
                },
                "fixed_height": {
                    "height": "200",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200.mp4",
                    "mp4_size": "52321",
                    "size": "792303",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200.webp",
                    "webp_size": "235470",
                    "width": "211"
                },
                "original_still": {
                    "height": "318",
                    "size": "62844",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy_s.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy_s.gif",
                    "width": "335"
                },
                "fixed_width_still": {
                    "height": "190",
                    "size": "24610",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200w_s.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200w_s.gif",
                    "width": "200"
                },
                "looping": {
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy-loop.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy-loop.mp4",
                    "mp4_size": "1107200"
                },
                "fixed_width": {
                    "height": "190",
                    "mp4": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200w.mp4?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200w.mp4",
                    "mp4_size": "46159",
                    "size": "719338",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200w.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200w.gif",
                    "webp": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200w.webp?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=200w.webp",
                    "webp_size": "214186",
                    "width": "200"
                },
                "preview_gif": {
                    "height": "85",
                    "size": "48791",
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy-preview.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy-preview.gif",
                    "width": "90"
                },
                "480w_still": {
                    "url": "https://media0.giphy.com/media/Mo9nI2yBKp3RC/480w_s.jpg?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=480w_s.jpg",
                    "width": "480",
                    "height": "456"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPU1vOW5JMnlCS3AzUkMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD00MDk3MDY5YWRmYzVlN2UxODg0MDg4NTgxNzQ5Y2MxNjBlN2I3N2I3OTgzMmY3NmQ",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=dfc5e7e1884088581749cc160e7b77b79832f76d&event_type=GIF_SEARCH&gif_id=Mo9nI2yBKp3RC&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=dfc5e7e1884088581749cc160e7b77b79832f76d&event_type=GIF_SEARCH&gif_id=Mo9nI2yBKp3RC&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=dfc5e7e1884088581749cc160e7b77b79832f76d&event_type=GIF_SEARCH&gif_id=Mo9nI2yBKp3RC&action_type=SENT"
                }
            }
        }, 
```
 example response examination:
1. the response key, "data", is an array of many objects. Most of the ones on top have a "type: gif" key:value pair. And they have an "images" object, which is holding many objects with key names pertaining to the type of image. For example, "downsized_large"

2. There's an image url in (for index n of data)
```
 response.data[n].images.downsized_large.url
```  
 It looks like this:  
![anakin](https://media0.giphy.com/media/Mo9nI2yBKp3RC/giphy.gif?cid=4097069adfc5e7e1884088581749cc160e7b77b79832f76d&rid=giphy.gif)

___

### 3. Google Custom Site Search

I went to the google custom search site and added a search engine:
https://cse.google.com/cse/all

 *Base URL: https://www.googleapis.com/customsearch/v1?
 *API key: I hide for now, call it 'myKey'  
 *query: '&q=' + [some search term]  
 *other parameters: 
 ..1. '&searchType=': I want an image search so I use 'image'  
 ..2. '&cx=' to custom search only https://starwars.fandom.com/wiki/Main_Page, I use the google custom search ID from my custom search (made in the user site) that only searches this page (called myCX)

example (query 'anakin'):  
```
https://www.googleapis.com/customsearch/v1?key=myKey&cx=myCX&q=anakin&searchType=image
```

example response:  
```
{
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [
      {
        "title": "Google Custom Search - anakin",
        "totalResults": "385000",
        "searchTerms": "anakin",
        "count": 10,
        "startIndex": 1,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "015933299778943018564:7q15mjcneyd",
        "searchType": "image"
      }
    ],
    "nextPage": [
      {
        "title": "Google Custom Search - anakin",
        "totalResults": "385000",
        "searchTerms": "anakin",
        "count": 10,
        "startIndex": 11,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "015933299778943018564:7q15mjcneyd",
        "searchType": "image"
      }
    ]
  },
  "context": {
    "title": "Starwars.fandom"
  },
  "searchInformation": {
    "searchTime": 0.432272,
    "formattedSearchTime": "0.43",
    "totalResults": "385000",
    "formattedTotalResults": "385,000"
  },
  "items": [
    {
      "kind": "customsearch#result",
      "title": "Anakin Skywalker | Wookieepedia | Fandom",
      "htmlTitle": "<b>Anakin</b> Skywalker | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Skywalker | Wookieepedia | Fandom",
      "htmlSnippet": "<b>Anakin</b> Skywalker | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Anakin_Skywalker",
        "height": 1024,
        "width": 819,
        "byteSize": 1417852,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzmN3ghPUVmMVCbUO1oMN8QTzDSh0-gMvoSiQUPpA2uR64dpko_miExM&s",
        "thumbnailHeight": 150,
        "thumbnailWidth": 120
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Anakin Skywalker | Wookieepedia | Fandom",
      "htmlTitle": "<b>Anakin</b> Skywalker | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest/top-crop/width/360/height/360?cb=20130621175844",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Skywalker | Wookieepedia | Fandom",
      "htmlSnippet": "<b>Anakin</b> Skywalker | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Anakin_Skywalker",
        "height": 360,
        "width": 360,
        "byteSize": 235033,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9CcymkZPx-tjjsfauVlPFjaxscGIuqBilK-znzwosqPk59Bf9dpDuQ&s",
        "thumbnailHeight": 121,
        "thumbnailWidth": 121
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Anakin Skywalker | Wookieepedia | Fandom",
      "htmlTitle": "<b>Anakin</b> Skywalker | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest/top-crop/width/360/height/450?cb=20130621175844",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Skywalker | Wookieepedia | Fandom",
      "htmlSnippet": "<b>Anakin</b> Skywalker | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Anakin_Skywalker/Legends",
        "height": 450,
        "width": 360,
        "byteSize": 290819,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzWfP90l7kiwA49VZahAHZeZRotXJkPGbbdoTwntAux7PZrrqECmX7Ds&s",
        "thumbnailHeight": 127,
        "thumbnailWidth": 102
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Anakin Solo | Wookieepedia | Fandom",
      "htmlTitle": "<b>Anakin</b> Solo | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/AnakinSolo_EA.jpg/revision/latest/top-crop/width/360/height/450?cb=20090820054939",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Solo | Wookieepedia | Fandom",
      "htmlSnippet": "<b>Anakin</b> Solo | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Anakin_Solo",
        "height": 450,
        "width": 360,
        "byteSize": 41761,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ74yyZwzN54fFU0jpQpo_voLbvgLnjmDwHTkXNA8frLS4VNfsgQAn8w&s",
        "thumbnailHeight": 127,
        "thumbnailWidth": 102
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Anakin Solo | Wookieepedia | Fandom",
      "htmlTitle": "<b>Anakin</b> Solo | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/AnakinSolo_EA.jpg/revision/latest?cb=20090820054939",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Solo | Wookieepedia | Fandom",
      "htmlSnippet": "<b>Anakin</b> Solo | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Anakin_Solo",
        "height": 900,
        "width": 664,
        "byteSize": 834043,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EZe9HcMvWYsHH0WQAJHtFcYCGywY9Kngoe4_Qi3qHqyYI0fXfq3Y76qu&s",
        "thumbnailHeight": 146,
        "thumbnailWidth": 108
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Send me the best fan art of Anakin skywalker dark side version ...",
      "htmlTitle": "Send me the best fan art of <b>Anakin</b> skywalker dark side version ...",
      "link": "https://static.wikia.nocookie.net/66044a4e-d246-4b7f-bcce-8fb49ebaa3e0",
      "displayLink": "starwars.fandom.com",
      "snippet": "Send me the best fan art of Anakin skywalker dark side version ...",
      "htmlSnippet": "Send me the best fan art of <b>Anakin</b> skywalker dark side version ...",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/f/p/3343172654596395570",
        "height": 1250,
        "width": 750,
        "byteSize": 63028,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaxPINKbxHQXEuXuuhjVnAXovGTG1DqqIEXLplM7BXBEtkzRmf6HcB-m9&s",
        "thumbnailHeight": 150,
        "thumbnailWidth": 90
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Mission to rescue Shmi Skywalker Lars | Wookieepedia | Fandom",
      "htmlTitle": "Mission to rescue Shmi Skywalker Lars | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/0/08/Anakin_Skywalker_slaughters_Tusken_Raiders.png/revision/latest?cb=20150214020053",
      "displayLink": "starwars.fandom.com",
      "snippet": "Mission to rescue Shmi Skywalker Lars | Wookieepedia | Fandom",
      "htmlSnippet": "Mission to rescue Shmi Skywalker Lars | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Mission_to_rescue_Shmi_Skywalker_Lars",
        "height": 534,
        "width": 1264,
        "byteSize": 740709,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHyRMWQAZRxDEyvtLB8NwLo5mMExEboYrVcmKaLFHzkPBEVOJ9rPJ0oUY&s",
        "thumbnailHeight": 63,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Force choke | Wookieepedia | Fandom",
      "htmlTitle": "Force choke | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/d/da/Anakinchoke.png/revision/latest?cb=20130205043222",
      "displayLink": "starwars.fandom.com",
      "snippet": "Force choke | Wookieepedia | Fandom",
      "htmlSnippet": "Force choke | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Force_choke",
        "height": 816,
        "width": 1670,
        "byteSize": 955544,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeugwzN0cBHPB1Cy8HLua4DVYlnUgOEgoGnWBK49WyprMn_vyjgVd43I&s",
        "thumbnailHeight": 73,
        "thumbnailWidth": 150
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Anakin Skywalker | Star Wars Wiki | Fandom",
      "htmlTitle": "<b>Anakin</b> Skywalker | Star Wars Wiki | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/6/6a/Anakin_Skywalker.jpg/revision/latest/scale-to-width-down/340?cb=20070218103451&path-prefix=nl",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Skywalker | Star Wars Wiki | Fandom",
      "htmlSnippet": "<b>Anakin</b> Skywalker | Star Wars Wiki | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/nl/wiki/Anakin_Skywalker",
        "height": 474,
        "width": 340,
        "byteSize": 23217,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dvzxq8fmW1Hiv5GLvt8WjP2EijPlR7GzzpBWxwZnSm7imn9YpoqkfKZu&s",
        "thumbnailHeight": 129,
        "thumbnailWidth": 93
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Anakin Skywalker's quarters | Wookieepedia | Fandom",
      "htmlTitle": "<b>Anakin</b> Skywalker&#39;s quarters | Wookieepedia | Fandom",
      "link": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Anakin_Quarters-TCW.jpg/revision/latest?cb=20140307102456",
      "displayLink": "starwars.fandom.com",
      "snippet": "Anakin Skywalker's quarters | Wookieepedia | Fandom",
      "htmlSnippet": "<b>Anakin</b> Skywalker&#39;s quarters | Wookieepedia | Fandom",
      "mime": "image/",
      "fileFormat": "image/",
      "image": {
        "contextLink": "https://starwars.fandom.com/wiki/Anakin_Skywalker%27s_quarters",
        "height": 540,
        "width": 1278,
        "byteSize": 121871,
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwi2bAX2K6qFqyj1B8HrQiSXmRyQoXybM1CQbfGGewV0dhIr8vLiqE3zu&s",
        "thumbnailHeight": 63,
        "thumbnailWidth": 150
      }
    }
  ]
}
```

example response examination:
1. The list of results seem to be held in response.items which is an array.
2. At the item[n] level (n being the index of an item), there is a key called 'link' which links to the image in this case. There is also a thumbnail in item[n].image.thumbnailLink 

![anakin from item.link](https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844)

![anakin from item.image.thumbnailLink](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzmN3ghPUVmMVCbUO1oMN8QTzDSh0-gMvoSiQUPpA2uR64dpko_miExM&s)