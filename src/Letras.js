import styled from "styled-components";

const LetterBox = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    margin: 6px;
    border-radius: 3px;
    border: 1px solid #7AA7C7; 
    color: #7AA7C7;
    align-items: center;
    justify-content: center;
    font-size 16px;
    font-weight: 700;
    pointer-events: ${props => props.disabled ? "none" : null};
    cursor: ${props => props.disabled ? "default" : "pointer"};
    background-color: ${props => props.disabled ? "#9FAAB5" : "#E1ECF4"};
    color: ${props => props.disabled ? "#798A9F" : "#7AA7C7"};    
`

export default function Letters({letter, disabled}) {
    return (
        <LetterBox disabled={disabled}>
            {letter}
        </LetterBox>
    )
}