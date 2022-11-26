import { isDisabled } from "@testing-library/user-event/dist/utils"
import { LetterBox } from "./LetterBox"
import { LetterContainer } from "./LetterContainer"

const Letters = ({
    newAlfabeto,
    isDisabled,
    pickedLetters,
    setPickedLetters
}) => {

    function pickLetter(event) {
        console.log("Foi o clique")
        console.log(event)
        setPickedLetters([...pickedLetters, event])
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