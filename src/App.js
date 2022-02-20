import React, { useEffect, useState } from "react";
import axios from "axios";

import './App.css';
import Header from "./components/Header/Header.jsx";
import PunkList from "./components/PunkList/PunkList";
import Main from "./components/Main/Main";

function App() {

  const [punkListData, setPunkListData] = useState([]);

  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xCB5FE3053aF074eC31401D981328B57Da0445D10&order_direction=asc');
      setPunkListData(openseaData.data.assets);
      // console.log(punkListData)
    };

    return getMyNfts()
  }, [])
  

  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
    </div>
  );
}

export default App;
