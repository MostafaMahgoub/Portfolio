import React,{useState,useEffect} from 'react';


function Typewriter({ text }) {
    const [displayText, setDisplayText] = useState("");
    
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 25);
  
      return () => clearInterval(interval);
    }, [text]);
  
    return <p className="AboutMe-paragraph">{displayText}</p>;
  }


export default Typewriter;