import React from "react";


import Categories from '../Categories'

import { 
  Container,
  UpperNav,
  MainContent
} from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <UpperNav>test</UpperNav>
      <MainContent>
        <Categories />
        
      </MainContent>
    </Container>
  )
}

export default Main