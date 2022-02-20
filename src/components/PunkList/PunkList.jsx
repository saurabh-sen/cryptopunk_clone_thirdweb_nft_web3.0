import React from "react";

import "./PunkList.css";
import CollectionCard from "../CollectionCard/CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)} className="" key={punk.token_id}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
          </div>
      ))}
    </div>
  );
};

export default PunkList;
