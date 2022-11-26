import ChuteSection from "./ChuteSection";
import forca6 from "./assets/forca6.png"

const Chute = ({
    gameWord,
    guessedWord,
    isDisabled,
    setGameImg,
    setGuessedWord,
    setIsDisabled,
    setUnderlineWord,
    setWordColor,
}) => {

    function guessWord() {
        let pickedWord = gameWord.join("")
        let normPickedWord = pickedWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        let normGuessedWord = guessedWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase()

        if (normPickedWord === normGuessedWord) {
            setIsDisabled(true)
            setWordColor("#27AE60")
            setUnderlineWord(gameWord)
            setGuessedWord("")
        }
        else {
            setIsDisabled(true)
            setWordColor("#FF0000")
            setUnderlineWord(gameWord)
            setGameImg(forca6)
            setGuessedWord("")
        }
    }

    return (
        <ChuteSection>
            <div>Já sei a palavra!</div>
            <input disabled={isDisabled ? "disabled" : null} type="text" value={guessedWord} onChange={(e) => setGuessedWord(e.target.value)} />
            <button onClick={guessWord} disabled={isDisabled ? "disabled" : null}>Chutar</button>
        </ChuteSection>
    )
}





export default Chute