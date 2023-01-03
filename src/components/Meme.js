import {useState} from 'react'
import memeData from '../memesData'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
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

    function handleChange(event) {
        const { name, value } = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

        console.log(meme)
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom text"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                    type="button" // prevents form submission
                    >Get a new meme image
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}