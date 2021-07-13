import React from "react";

import logo from '../../assets/logo.svg';
import {ReactComponent as HomeIcon} from '../../assets/home.svg';
import {ReactComponent as SearchIcon} from '../../assets/search.svg';
import {ReactComponent as LibraryIcon} from '../../assets/library.svg';

import {
  NavBar,
  Logo,
  Li,
  Cookies
} from './styles';



const Nav: React.FC = () => {

  return (
    <NavBar>
        <Logo><img src={logo} alt="" /></Logo>
        <ul>
          <Li> 
            <li className="active">
              <HomeIcon />
              Home
            </li>
          </Li>
          <li>
            <SearchIcon />
            Search
          </li>
          <li>
            <LibraryIcon />
            Library
          </li>
        </ul>

        <Cookies>
          <span>Cookies</span>
          <span>Privacy Policy</span>
        </Cookies>
      </NavBar>
  )
}


export default Nav