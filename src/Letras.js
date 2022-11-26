import { isDisabled } from "@testing-library/user-event/dist/utils"
import { LetterBox } from "./LetterBox"
import { LetterContainer } from "./LetterContainer"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


const Letters = ({
    errorCount,
    gameWord,
    isDisabled,
    newAlfabeto,
    pickedLetters,
    setErrorCount,
    setGameImg,
    setIsDisabled,
    setPickedLetters,
    setUnderlineWord,
    setWordColor,
    underlineWord,
}) => {

    function checkRightOrWrong(e) {
        let pickedWord = gameWord


        if (pickedWord.includes(e)) {
            pickedWord.map((a, index) => {
                if (a.normalize('NFD').replace(/[\u0300-\u036f]/g, "") === e) {
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
        if (!underlineWord.includes("_")) {
            setIsDisabled(true)
            setWordColor("#27AE60")
        }

        else {
            if (e === 1) {
                setGameImg(forca1)
            }
            else if (e === 2) {
                setGameImg(forca2)
            }
            else if (e === 3) {
                setGameImg(forca3)
            }
            else if (e === 4) {
                setGameImg(forca4)
            }
            else if (e === 5) {
                setGameImg(forca5)
            }
            else if (e === 6) {
                setGameImg(forca6)
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
                <LetterBox value={a} key={index} onClick={() => pickLetter(a)} disabled={isDisabled || pickedLetters.includes(a) ? "disable" : null}>
                    {a}
                </LetterBox>)}
        </LetterContainer>
    )
}

export default Letters