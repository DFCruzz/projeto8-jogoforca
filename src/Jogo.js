import { GameContainer, LeftContainer, RightContainer, StartButton, WordContainer } from "./JogoStyledComp";
import forca0 from "./assets/forca0.png"

const Jogo = ({
    gameImg,
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
                <img src={gameImg} />
            </LeftContainer>
            <RightContainer>
                <StartButton onClick={() => startGame()}>Escolher Palavra</StartButton>
                <WordContainer style={{ color: wordColor }}>
                    {underlineWord}
                </WordContainer>
            </RightContainer>
        </GameContainer>
    )
}

export default Jogo