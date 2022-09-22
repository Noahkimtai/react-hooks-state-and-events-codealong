import React  from "react";
import {useState} from "react"

function Toggle() {
  const [isOn,setisOn]=useState(false);
  function handleClick(){
    setisOn(!isOn)
  }
  // create color based on the value of isON
  const color = isOn? 'white':'red';

  return <button onClick={handleClick} style={{ background :color}}>{isOn? 'ON':'OFF'}</button>;

}

export default Toggle;
