import styled from "styled-components";

const StartButton = styled.button`
   width: 200px;
   height: 60px;
   border-radius: 8px;
   border: none;
   background-color: #27AE60;
   font-size: 20px;
   font-weight: 700;
   text-align: center;
   color: #FFFFFF;
`

export default function RunGame() {
    return (
        <StartButton>Escolher Palavra</StartButton>
    )
}