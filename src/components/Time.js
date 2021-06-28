import React, { useState } from "react";

import { TimePicker } from "react-datetime-range-super-picker";
import "react-datetime-range-super-picker/dist/index.css";

export default function Time() {
  const [hour24, setHour] = useState(22);
  const [minute, setMin] = useState(30);
  // OR use hour (12 hour format), minute and meridian (AM | PM) for props
  // OR for string time use : "HH:mm" ( 24 hrs ) | "hh:mm aa" ( 12 hrs )

  const handleTimeUpdate = ({ time }) => {
    
    setHour(time.hour24);
    setMin(time.minute);
  };

  return (
    <div>
      <TimePicker time={{ hour24, minute }} onTimeUpdate={handleTimeUpdate} />
      <button
        onclick={({ time }) => {
          console.log(time);
        }}
      >
        console
      </button>
    </div>
  );
}
