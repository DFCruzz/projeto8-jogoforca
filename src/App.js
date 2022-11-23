import styled from "styled-components"
import RunGame from "./Jogo"
import Letters from "./Letras"
import Chute from "./Chute"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const LetterContainer =styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 660px;
    height: 90px;
`

export default function App() {
    return (
        <>
            <RunGame />
            <LetterContainer>
            </LetterContainer>
            <Chute />
        </>
    )
}