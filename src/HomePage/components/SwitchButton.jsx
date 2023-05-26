import React from 'react';

const SwitchButton = ({ isHidden, setIsHidden, handleClickNav }) => {
  return (
    <div className={`round ${isHidden ? 'switch-button-animation' : 'fade-switch-button-animation'}`}>
      <input type="checkbox" id="onoff" name="onoff" />
      <div className="back">
        <label className="but" onClick={() => {setIsHidden(!isHidden);handleClickNav();}} htmlFor="onoff">
          <span className="on">I</span>
          <span className="off">0</span>
        </label>
      </div>
    </div>
  );
};

export default SwitchButton;