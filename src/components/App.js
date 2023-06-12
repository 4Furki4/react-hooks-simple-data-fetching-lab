// create your App component here
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function App() {
    const [dogImage, setDogImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message)
                setIsLoaded(true)
            })
    }, [])
    return (
        <div>
            {isLoaded ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    )
}
