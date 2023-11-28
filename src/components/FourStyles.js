import styled from "styled-components";
import Four from "./Four";

export const FourStyled = styled(Four)`
    font-size: 18px;                           
    font-weight: 400;
    text-transform: capitalize;
    opacity: 0.7;
    margin-left: 40px;
    text-align: center;
    line-height: 30px;
    @media screen and(max-width: 768px) {       
        text-align: left;
        color: red;
    }
`;