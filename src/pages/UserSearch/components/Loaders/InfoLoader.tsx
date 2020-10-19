import React from "react";
import ContentLoader from "react-content-loader";

const InfoLoader = () => (
  <ContentLoader 
    speed={1}
    width={846}
    height={253}
    viewBox="0 0 846 253"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="-26" y="481" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="0" rx="8" ry="8" width="846" height="253" />
  </ContentLoader>
);

export default InfoLoader;