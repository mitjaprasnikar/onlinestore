import styled from "styled-components";
import CustomButton from "../custom-button/custom-button"

export const CartDropdown = styled.div`
        position: absolute;
        width: 240px;
        height: 340px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border: 1px solid black;
        background-color: white;
        top: 90px;
        right: 40px;
        z-index: 5;
`;


export const CartItems = styled.div `
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
`;

export const DropdownButton = styled(CustomButton) `
        margin-top: auto;
`

export const EmptyCart = styled.div `
    font-size: 18px;
    margin: 50px auto;
`