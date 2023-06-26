import { useState } from "react";

const SwitchModal = () => 
{
  const [isVisible, setIsVisible] = useState(false);

  function toggle() 
  {
    setIsVisible(!isVisible);
  }

  return {
    isVisible,
    toggle
  };
};

export default SwitchModal;