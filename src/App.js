import { useState } from "react"
import styled from "styled-components"
import Jogo from "./Jogo"
import Letters from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const newAlfabeto = alfabeto.map(a => a.toUpperCase())

    const [isDisabled, setIsDisabled] = useState(true)
    const [gameImg, setGameImg] = useState("./assets/forca0.png")
    const [gameWord, setGameWord] = useState([])
    const [underlineWord, setUnderlineWord] = useState([])
    const [pickedLetters, setPickedLetters] = useState([])


    return (
        <>
            <Jogo
                palavras={palavras}
                setUnderlineWord={setUnderlineWord}
                setIsDisabled={setIsDisabled}
                underlineWord={underlineWord}
                gameImg={gameImg}
                setGameWord={setGameWord}
            />
            <Letters
                newAlfabeto={newAlfabeto}
                isDisabled={isDisabled}
                pickedLetters={pickedLetters}
                setPickedLetters={setPickedLetters}
            />
            <Chute disabled={isDisabled ? "disabled": null} />
        </>
    )
}


// palavraChave .toLowerCase() .normalize("NFD") .replace(/[^a-zA-Z\s]/g, "") 