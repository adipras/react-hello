import { useEffect, useState } from "react";

export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('State updated: ', word)
    }, [word])

    useEffect(() => {
        console.log('State updated: ', word2)
    }, [word2])

    //no depedency array --> update for any state change
    //empty depedency array --> execute once
    //passing in data --> only execute when those state variables are changed

    return (
        <>
            <input type="text" onChange={(e) => {
                setWord(e.target.value)
            }} />
            <h1>Let's get the definition for {word}</h1>
        </>
    )
}