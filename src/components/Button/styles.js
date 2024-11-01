import styled from "styled-components";

export const ButtonContainer = styled.button `
    padding: 40px;
    flex: 1;
    border: 0;
    margin: 1px;
    background-color: #4cc3ed; 
    cursor: pointer;
    transition: 0.4s;
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;

    &:hover{
        opacity: 0.6;
    }
`