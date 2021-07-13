import styled from "styled-components";


export const UpperNav = styled.header`
  background: rgba(9,9,9, 0.78);
  height: 56px;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  z-index: 2;
`

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  position: relative;
  padding-top: 3.4rem;
`

export const MainContent = styled.div`
  color: white;
  padding: 0.5rem 2rem;

  h1, h2 {
    font-size: 1.8rem;
  }
`
