import { isDisabled } from "@testing-library/user-event/dist/utils"
import { LetterBox } from "./LetterBox"
import { LetterContainer } from "./LetterContainer"

const Letters = ({
    newAlfabeto,
    isDisabled,
    pickedLetters,
    setPickedLetters,
    gameWord,
    underlineWord,
    setUnderlineWord,
    errorCount,
    setErrorCount,
    setGameImg,
    setIsDisabled,
    setWordColor,
}) => {

    function checkRightOrWrong(e) {
        let pickedWord = gameWord
        

        if(pickedWord.includes(e)) {
            pickedWord.map((a, index) => {
                if(a.normalize('NFD').replace(/[\u0300-\u036f]/g, "") === e) {
                    fillBlankArray(a, index)
                    endGame()
                }
            })
        }
        else {
            let count = errorCount + 1
            setErrorCount(count)
            console.log(count)
            endGame(count)
        }
    }

    function fillBlankArray(e, index) {
       let blankPickedWord = underlineWord
       blankPickedWord[index] = e
       setUnderlineWord(blankPickedWord)

    }

    function endGame(e) {
        if(!underlineWord.includes("_")) {
            setIsDisabled(true)
            setWordColor("#27AE60")
        }

        else {
            if(e === 1) {
                setGameImg("./assets/forca1.png")
            }
            else if(e === 2) {
                setGameImg("./assets/forca2.png")
            }
            else if(e === 3) {
                setGameImg("./assets/forca3.png")
            }
            else if(e === 4) {
                setGameImg("./assets/forca4.png")
            }
            else if(e === 5) {
                setGameImg("./assets/forca5.png")
            }
            else if(e === 6) {
                setGameImg("./assets/forca6.png")
                console.log("Game Over Papito!")
                setIsDisabled(true)
                setWordColor("#FF0000")
                setUnderlineWord(gameWord)
            }
        }
    }

    function pickLetter(event) {
        console.log(event)
        setPickedLetters([...pickedLetters, event])
        checkRightOrWrong(event)
    }

    return (
        <LetterContainer>
            {newAlfabeto.map((a, index) =>
                <LetterBox value={a} key={index} onClick={() => pickLetter(a)} disabled={isDisabled || pickedLetters.includes(a) ? "disable" : null }>
                    {a}
                </LetterBox>)}
        </LetterContainer>
    )
}

export default Letters