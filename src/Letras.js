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
}) => {

    function checkRightOrWrong(e) {
        let pickedWord = gameWord
        

        if(pickedWord.includes(e)) {
            pickedWord.map((a, index) => {
                if(a.normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === e) {
                    fillBlankArray(a, index)
                }
            })
        }
        else {
            let count = errorCount + 1
            setErrorCount(count)
            console.log(count)
        }
    }

    function fillBlankArray(e, index) {
       let blankPickedWord = underlineWord
       blankPickedWord[index] = e
       setUnderlineWord(blankPickedWord)

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