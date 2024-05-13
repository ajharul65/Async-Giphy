require('dotenv').config();
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=SjQh08oaXOW9GKE1qRsR3Y5MVHUf6LhS&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)


async function getImages(query){
    try{
    const response =  await fetch (endpoint)
    const data = await response.json()
    
    const img = data.results[0].url
    console.log(img)

    return img


}
catch (error){
    console.error('There was an error fetching the image')
}
}

