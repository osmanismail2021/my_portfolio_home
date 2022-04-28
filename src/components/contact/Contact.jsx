import { useState } from "react";
import "./contact.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id="contact">
     


      <div className="left">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>

        <div className="itemContainer">
            <Person className="icon" />
            <span>+32 492 07 56 63</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>osman@ism@live.nl</span>
          </div>
      </div>

      <div className="right">
        <img src="assets/contact.png" alt="" />
      </div>
    </div>
  )
}
