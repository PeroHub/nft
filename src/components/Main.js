import React from 'react'
import head from '../assets/owner/head.jpg'
import twitterLogo from '../assets/owner/twitter.png'
import instagramLogo from '../assets/owner/instagram.png'
import moreLogo from '../assets/owner/more.png'
import './Main.css'

export const Main = () => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighLight">
                    <div className="punkContainer">
                        <img className="selectedPunk" src={head} alt="" />
                    </div>
                </div>
                <div className="punkDetailsContainer">
                    <div className="punkDetails">
                        <div className="title">Bandana Punk</div>
                        <span className="itemNumber">.#3</span>
                    </div>
                    
                    <div className="ownerDetails">
                    

                        <div className="ownerNameAndHandle">
                            <div className="owner">
                                
                                    <img className="ownerimage" src={head} alt="" />
                                
                            </div>
                           <div className="movethis">
                            <p style={{color: "#fff"}}>0x0446d9c542CEcb4f156F7fCf5E1E189af23FC77D</p>
                            <p style={{color: "#fff"}} className="ownerHandle">@peterime</p>
                           </div>
                        </div>
                        <div className="iconContainer">
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt="twitter logo" /> 
                            </div>
                            <div className='ownerLink'>
                                <img src={instagramLogo} alt=" instagram logo" /> 
                            </div>
                            <div className='ownerLink'>
                                <img src={moreLogo} alt="more icon" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
