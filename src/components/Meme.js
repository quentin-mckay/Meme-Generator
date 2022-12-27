import {useState} from 'react'
import memeData from '../memesData'

export default function Meme() {

    const [memeImage, setMemeImage] = useState('asdf')

    function getMemeImage() {

        function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        const memesArray = memeData.data.memes
        const meme = getRandomItem(memesArray)
        const url = meme.url // or const { url } = meme (using destructuring)

        console.log(url)

        setMemeImage(url)
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
            <img src={memeImage} className="meme--image" alt="meme" />
        </main>
    )
}