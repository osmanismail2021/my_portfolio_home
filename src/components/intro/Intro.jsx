import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: false,
      strings:["Html5", "Css3", "Javascript", "Bootstrap", "React","React-Native", "Node.js", "MongoDB"],
    });

  },[])

  return (
    <div className='intro' id="intro">
        <div className="left">
        <div className="imgContainer">
            <img src="assets/blackwitsaydam.png" alt="" />
          </div>
        </div>
        <div className="right">
            <div className="wrapper">
              <h2>Hello There, I'm</h2>
              <h1>Osman ISMAIL</h1>
              <h3>FrontEnd Developer <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
              <img src="assets/down-arrow.png" alt="" />
            </a>
        </div>
    </div>
  )
}
