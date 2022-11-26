import { useState } from "react"
import Jogo from "./Jogo"
import Letters from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"
import forca0 from "./assets/forca0.png"
import GlobalStyle from "./GlobalStyles"

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const newAlfabeto = alfabeto.map(a => a.toUpperCase())

    const [errorCount, setErrorCount] = useState(0)
    const [gameImg, setGameImg] = useState(forca0)
    const [gameWord, setGameWord] = useState([])
    const [guessedWord, setGuessedWord] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const [pickedLetters, setPickedLetters] = useState([])
    const [underlineWord, setUnderlineWord] = useState([])
    const [wordColor, setWordColor] = useState("#000000")


    return (
        <>
            <GlobalStyle />
            <Jogo
                gameImg={gameImg}
                gameWord={gameWord}
                palavras={palavras}
                setErrorCount={setErrorCount}
                setGameImg={setGameImg}
                setGameWord={setGameWord}
                setIsDisabled={setIsDisabled}
                setPickedLetters={setPickedLetters}
                setUnderlineWord={setUnderlineWord}
                setWordColor={setWordColor}
                underlineWord={underlineWord}
                wordColor={wordColor}
            />
            <Letters
                errorCount={errorCount}
                gameWord={gameWord}
                isDisabled={isDisabled}
                newAlfabeto={newAlfabeto}
                pickedLetters={pickedLetters}
                setErrorCount={setErrorCount}
                setGameImg={setGameImg}
                setIsDisabled={setIsDisabled}
                setPickedLetters={setPickedLetters}
                setUnderlineWord={setUnderlineWord}
                setWordColor={setWordColor}
                underlineWord={underlineWord}
            />
            <Chute
                gameWord={gameWord}
                guessedWord={guessedWord}
                isDisabled={isDisabled}
                setGameImg={setGameImg}
                setGuessedWord={setGuessedWord}
                setIsDisabled={setIsDisabled}
                setUnderlineWord={setUnderlineWord}
                setWordColor={setWordColor}
            />
        </>
    )
}