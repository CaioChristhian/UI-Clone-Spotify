import styled from "styled-components";



export const NavBar = styled.div`
  width: 260px;
  height: 100%;
  background: #040404;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: #b3b3b3;

  ul {
    margin: 0;
    padding: 0;

    li {
      color: #b3b3b3;
      list-style-type: none;
      border-radius: 5px;
      padding: 0.5rem 0.8rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      margin-bottom: 5px;
      font-size: 0.9rem;
      display: flex;
      align-items: center;

      svg {
        fill: currentColor;
        margin-right: 15px;
      }

      &:hover{
        color: #FFF;
      }
    }
    
  }

`

export const Li = styled.div`
li {
      &.active {
        background: #282828;
        color: white;
        svg {
          fill: white;
        }
      }

      &:hover{
        color: #FFF;
      }
    }

`

export const Logo = styled.div`
  padding: 1rem 0.8rem;
  
  img {
    max-width: 130px;
  }
`

export const Cookies = styled.div`
  font-size: 0.6rem;
  color: #b3b3b3;
  margin-top: auto;
  padding: 1rem;

  span {
    display: block;
    text-align: center;
  }
`