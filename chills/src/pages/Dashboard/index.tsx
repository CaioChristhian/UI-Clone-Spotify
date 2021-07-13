import React from "react";

import Nav from "../../components/Nav";
import Main from "../../components/Main";

import { 
  Container, 
  App,
  MusicControls
} from "./styles";


const Dashboard: React.FC = () => {
  return (
   <>
      <App>

        <Container>
          <Nav />
          <Main />
        </Container>

        <MusicControls>
          music controls
        </MusicControls>

      </App>
    </>
  )
}

export default Dashboard;