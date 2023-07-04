import React, { useEffect, useState } from 'react';
import '../styles/Main.css';

export default function Main() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var currentTime = `${h}:${m}:${s}`;
      setTime(currentTime);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='main-component'>
      <div className='time' id='txt'>
        <p>{time}</p>
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';

// function Main() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>{time}</h1>
//     </div>
//   );
// }

// export default Main;