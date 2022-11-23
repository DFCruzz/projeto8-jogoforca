import styled from "styled-components";


const LetterBox = styled.li`
    width: 39px;
    height: 39px;
    margin: 6px;
    border-radius: 3px;
    border: 1px solid #7AA7C7;
    background-color: #E1ECF4;
    color: #7AA7C7;
    text-align: center;
`

export default function Letters(props) {
    return (
        <LetterBox>
            {props}
        </LetterBox>
    )
}