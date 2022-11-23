import styled from "styled-components";

const ChuteSection = styled.section`
    display: flex;
    width: 620px;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    div {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }

    input {
        width: 353px;
        height: 39px;
        border: 1px solid #CCCCCC;
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    }

    button {
        width: 100px;
        height: 39px;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        color: #7AA7C7;
        font-size: 16px;
        font-weight: 700;
        text-align: center
    }
`

export default function Chute() {
    return (
        <ChuteSection>
            <div>Já sei a palavra!</div>
            <input type="text" />
            <button>Chutar</button>                
        </ChuteSection>
    )
}