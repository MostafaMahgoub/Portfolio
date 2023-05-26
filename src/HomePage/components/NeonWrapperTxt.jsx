import React from 'react';

const NeonWrapperTxt = ({ isHidden }) => {
return (
<div className={`neon-wrapper ${isHidden ? '' : 'hidden'}`}>
  <span className="txt">MOSTAFA REDA</span>
</div>
);
};

export default NeonWrapperTxt;