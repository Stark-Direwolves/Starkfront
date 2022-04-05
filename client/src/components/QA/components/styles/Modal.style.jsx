import styled from "styled-components";

export const SModalOverlay = styled.div`
  background-color: #999999;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

export const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 25%;
  width: 100%;
  z-index: 1000;
`;

export const SModal = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin: 1.875rem;
  max-width: 500px;
  position: relative;
  z-index: 100;
`;

export const SHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1.875rem 0.9375rem 1.875rem 0.9375rem;
`;

export const STitle = styled.h5`
  margin-bottom: 0.3125rem;
`;

export const SButton = styled.button`
  border-top: 1px solid #F0F0F0;
  color: #6D087C;
  cursor: pointer;
  font-weight: bold;
  padding: 0.9375rem;
  width: 100%;
`;

export const SDescription = styled.span`
  color: #C1C1C1;
  text-align: center;
`;
