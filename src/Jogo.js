import { GameContainer, LeftContainer, RightContainer } from "./JogoStyledComp";
import forca0 from "./assets/forca0.png"

const Jogo = ({
    gameImg,
    gameWord,
    palavras,
    setErrorCount,
    setGameImg,
    setGameWord,
    setIsDisabled,
    setPickedLetters,
    setUnderlineWord,
    setWordColor,
    underlineWord,
    wordColor,
}) => {

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

    function wordToUnderline(arr) {
        return arr.map(() => "_")
    }
    //Auxiliary Functions - End

    function startGame() {
        const randomWord = upperCase(pickRandomString(palavras))
        const wordArr = stringToArray(randomWord)
        console.log(wordArr)
        const blankArray = wordToUnderline(wordArr)
        setGameWord(wordArr)
        setUnderlineWord(blankArray)
        setErrorCount(0)
        setIsDisabled(false)
        setPickedLetters([])
        setWordColor("#000000")
        setGameImg(forca0)
    }

    return (
        <GameContainer>
            <LeftContainer>
                <img data-test="game-image" src={gameImg} />
            </LeftContainer>
            <RightContainer>
                <button data-test="choose-word" onClick={() => startGame()}>Escolher Palavra</button>
                <p data-test="word" data-answer={gameWord.join("")} style={{ color: wordColor }}>
                    {underlineWord.join("")}
                </p>
            </RightContainer>
        </GameContainer>
    )
}

export default Jogo