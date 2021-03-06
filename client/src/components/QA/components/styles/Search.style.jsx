import styled from 'styled-components';

export const SContainer = styled.div`
    width: 50%;
    appearance: none;
    outline: none;
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: 700;
    background: rgb(245, 245, 245);
    border-bottom: 2px solid rgb(33, 42, 47);
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-radius: 0px;
    padding: 2px 12px 0px;
    color: rgb(33, 42, 47);
    box-shadow: transparent 0px 2px 0px 0px inset;
    margin: 10px 0;
    &:focus-within {
    outline: 2px solid rgb(33, 42, 47);
}
`;

export const Input = styled.input`
background: transparent;
border: none;
outline: none;
width: 100%;
font-weight: 500;
font-size: 16px;
transition: 0.8s;
padding: 10px;
  `;
