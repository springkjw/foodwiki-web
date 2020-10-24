import React from "react";
import PropTypes from "prop-types";

export default function ResponsiveImage({ url, height, ratio }) {
  return (
    <div
      style={{
        width: height * ratio,
        height,
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      }}
    />
  );
}

ResponsiveImage.propTypes = {
  url: PropTypes.string,
  height: PropTypes.number,
  ratio: PropTypes.number,
};
