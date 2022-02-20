import React from 'react'
import "./Header.css"

import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header" >
      <div className="logoContainer">
          <img src={punkLogo} alt="punkLogo" className="punkLogo" />
      </div>

      <div className="searchBar">
          <div className="searchIconContainer">
              <img src={searchIcon} alt="searchIcon" />
          </div>
          <input type="search" className="searchInput" placeholder="Collection, item" />
      </div>

      <div className="headerItems">
          <p>Drops</p>
          <p>MarketPlace</p>
          <p>Create</p>
      </div>

      <div className="headerActions">
          <div className="themeSwitchContainer">
              <img src={themeSwitchIcon} alt="themeSwitchIcon" />
          </div>

          <div className="loginButton">GET-IN</div>
      </div>
    </div>
  )
}

export default Header