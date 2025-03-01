import styled, { createGlobalStyle } from "styled-components";

const EstiloGloblal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  list-style: none;
  }

  body {
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-widght: 768px) {
    paddin-top: 16px;
  }
  }
`

export default EstiloGloblal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-widght: 768px) {
    max-width: 80%;
    display: block;
  }
`
