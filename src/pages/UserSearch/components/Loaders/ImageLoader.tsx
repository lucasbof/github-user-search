import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = () => (
  <ContentLoader 
    speed={1}
    width={278}
    height={315}
    viewBox="0 0 278 315"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="-26" y="481" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="0" rx="8" ry="8" width="278" height="268" /> 
    <rect x="0" y="279" rx="8" ry="8" width="153" height="36" />
  </ContentLoader>
);

export default ImageLoader;