import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 35px;
  @media screen and (max-width: 768px){
    margin-left: 0;
    flex-direction: column;
    display: flex;
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const HeroTitle = styled.p`
  color: #1B1B1B;
  font-size: 42px;
  font-weight: bold;
  line-height: 140%;
  text-transform: captilize;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const HeroPara = styled.p`
  color: #1B1B1B;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-transform: captilize;
  opacity: 0.7;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`;

export const HeroBtn = styled.button`
  border: none;
  border-radius: 108px;
  padding: 15px 22px;
  background-color: #5245A6;
  color: white;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;