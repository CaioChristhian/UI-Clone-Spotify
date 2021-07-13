import styled from "styled-components";

export const PlayIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  background: #1db954;
  position: relative;
  margin-left: auto;
  opacity: 0;
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  
  svg {
    margin: auto;
  }
`

export const Card = styled.div`
  position: relative;
  &:hover ${PlayIcon}{
    opacity: 1;
  }

  margin-right: 1.2rem;
  background: #282828;
  border-radius: 10px;
  width: 190px;
  height: 260px;
  overflow: hidden;
  padding: 1.2rem;
  box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
`

export const CardWrapperInner = styled.div`
  display: flex;
`

export const CardImage = styled.div`
  height: 160px;
  box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`

export const CardContent = styled.div`
  padding: 0.4rem 0;

  h3 {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0;
    letter-spacing: 0.6px;
  }
`
export const SubText = styled.div`
  font-size: 0.9rem;
  color: #b3b3b3;
  margin-bottom: 1.5rem;
`

export const SubTextSmall = styled.div`
  font-size: 0.8rem;
  color: #b3b3b3;

`

export const SeeAll = styled.div`
`