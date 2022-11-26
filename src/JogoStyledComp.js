import styled from "styled-components";

export const GameContainer = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 500px;
    margin-top: 40px;
`

export const LeftContainer = styled.div`
    width: 400px;
    height: 470px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const RightContainer = styled.div`
    width: 400px;
    height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const StartButton = styled.button`
   width: 200px;
   height: 60px;
   border-radius: 8px;
   border: none;
   background-color: #27AE60;
   font-size: 20px;
   font-weight: 700;
   text-align: center;
   color: #FFFFFF;
   margin: 0 auto;
   cursor: pointer;
`

export const WordContainer = styled.p`
    width: 100%;
    height: 70px;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 20px;
`

