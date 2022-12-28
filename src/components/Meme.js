import {useState} from 'react'
import memeData from '../memesData'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memeData)

    function getMemeImage() {

        function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        const memesArray = allMemeImages.data.memes
        const meme = getRandomItem(memesArray)
        const url = meme.url // or const { url } = meme (using destructuring)

        console.log(url)

        // update meme object in state
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <form className="form" action="">
                <input className="form--input" type="text" placeholder="Top text"/>
                <input className="form--input" type="text" placeholder="Bottom text"/>
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                    type="button" // prevents form submission
                    >Get a new meme image
                </button>
            </form>
            <img src={meme.randomImage} className="meme--image" alt="meme" />
        </main>
    )
}