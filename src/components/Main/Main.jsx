import React, { useEffect, useState } from 'react';
import "./Main.css";

import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {

    const [activePunk, setActivePunk] = useState(punkListData[1]);
    // console.log(punkListData[1])
    // console.log(activePunk)

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    

  return (
    <div className="main" >
        <div className="mainContent">
            <div className="punkHighLight">
                <div className="punkContainer">
                    <img src={activePunk.image_url} alt="activePunk" className="selectedPunk" />
                </div>
            </div>
            
            <div className="punkDetails" style={{ color: "white"}} >
                <div className="title">
                    {activePunk.name}
                <span className="itemNumber" >❁{activePunk.token_id}</span>
                </div>
                
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={activePunk.owner.profile_img_url} alt="ownerImage" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div className="">{activePunk.owner.address}</div>
                            <div className="ownerHandle">@Saurabh Sen</div>
                        </div>
                            <div className="ownerLink">
                                <img src={instagramLogo} alt="insta" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="twitter" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="more" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main