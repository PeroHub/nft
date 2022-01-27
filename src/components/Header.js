import React from 'react'
import './header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
export const Header = () => {
    return (
        <div className="header">
           <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt="" />
           </div>

           <div className="searchBar">
            <div className="searchIconContainer">
                <img src={searchIcon} alt="search" />
            </div>
            <input className="searchInput" placeholder="collection items or user ...... "/>
           </div>

           <div className="headerItems">
                 <p>Drops</p>
                 <p>Marketplace</p>
                 <p>Create</p>
           </div>

           <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={themeSwitchIcon} alt="theme Switch Icon"/>
                </div>
           </div>

           <div className="loginButton">GET IN</div>
        </div>
    )
}
 