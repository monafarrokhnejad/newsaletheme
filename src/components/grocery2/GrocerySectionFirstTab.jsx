import React from "react";
import { Player } from 'video-react';

const GrocerySectionFirstTab = () => {
    return <div style={{padding:"0", borderRadius:"4px"}}>
        <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
    </div>
};

export default GrocerySectionFirstTab;