import styled from "styled-components";
import Four from "./Four";

export const FourStyled = styled(Four)`
    font-size: 18px;                           // for desktop style
    font-weight: 400;
    text-transform: capitalize;
    opacity: 0.7;
    margin-left: 40px;
    text-align: center;
    line-height: 30px;
    @media screen and(max-width: 768px) {       // for mobile responsive
        text-align: left;
        color: red;
    }
`;