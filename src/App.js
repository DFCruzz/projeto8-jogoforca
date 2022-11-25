import styled from "styled-components"
import RunGame from "./Jogo"
import Letters from "./Letras"
import Chute from "./Chute"
import { useState } from "react"
import palavras from "./palavras"


const LetterContainer =styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 680px;
    height: 90x;
    margin: 18px auto;
`

export default function App() {


    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const novoAlfabeto= alfabeto.map(a => a.toUpperCase())

    const [disabledKey, setDisabledKey] = useState(true)
    const [disabledInput, setDisabledInput] = useState(true)
    const [gameImg, setGameImg] = useState("./assets/forca0.png")
    const [gameWord, setGameWord] = useState([])


    //Auxiliary Functions - Start
    function upperCase(string) {
        return string.toUpperCase()
    }

    function pickRandomString(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    function stringToArray(string) {
        return [...string]
    }

    function printUnderlines(arr) {
        arr.map(x => "_")
    }
    //Auxiliary Functions - End

    function startGame() {
        const randomWord = upperCase(pickRandomString(palavras))
        const wordArr = stringToArray(randomWord)
        console.log(wordArr)       
        const blankArray = wordArr.map(x => "_")
        setGameWord(blankArray.join(" "))
        setDisabledInput(false)
        setDisabledKey(false)
    }

    return (
        <>
            <RunGame startGame={startGame} palavra={gameWord} forca={gameImg}/>
            <LetterContainer>
                {novoAlfabeto.map(a => <Letters disabled={disabledKey} key={a} letter={a} />)}
            </LetterContainer>
            <Chute disabled={disabledInput} />
        </>
    )
}