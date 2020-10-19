import React from "react";
import './styles.css';
import ImageLoader from "../ImageLoader";
import InfoLoader from "../InfoLoader";


const ProfileUserLoader = () => (
    <div className="loader-container">
        <div className="image-loader">
            <ImageLoader />
        </div>
        <div className="info-loader">
            <InfoLoader />
        </div>
    </div>
);

export default ProfileUserLoader;