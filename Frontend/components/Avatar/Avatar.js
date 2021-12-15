import React from "react";

const className = (unlockable) => unlockable ? `${unlockable.closet}${unlockable.id}` : null;

const Avatar = ({ outfit, size }) => {
  return (
    <div id="container">
      <div id="background">
        <div id="body" className={size}></div>
        <div id="accessoires" className={`${className(outfit.accessoires)} ${size}`}></div>
        <div id="shoes" className={`${className(outfit.shoes)} ${size}`}></div>
        <div id="tops" className={`${className(outfit.tops)} ${size}`}></div>
        <div id="bottoms" className={`${className(outfit.bottoms)} ${size}`}></div>
        <div id="dresses" className={`${className(outfit.dresses)} ${size}`}></div>
        <a href="/avatar" className={`suitcase suitcase_${size}`} />
      </div>
    </div>
  )
};

export default Avatar;
