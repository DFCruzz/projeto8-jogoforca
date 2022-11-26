import { GameContainer, LeftContainer, RightContainer, StartButton, WordContainer } from "./JogoStyledComp";

const Jogo = ({
    palavras,
    setGameWord,
    gameWord,
    setUnderlineWord,
    setErrorCount,
    setIsDisabled,
    underlineWord,
    gameImg,
    setGameImg,
    setPickedLetters
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
    }

    return (
        <GameContainer>
            <LeftContainer>
                <img src={gameImg} />
            </LeftContainer>
            <RightContainer>
                <StartButton onClick={() => startGame()}>Escolher Palavra</StartButton>
                <WordContainer>
                    {underlineWord}
                </WordContainer>
            </RightContainer>
        </GameContainer>
    )
}

export default Jogo