import React from 'react'
import "./style.scss";


export default function ContactSection() {
    return (
        <div className="mainDivContactSection">
        <div className="contactSection">
           <h3>Want to work with us?</h3> 
           <p>Complete this form and we will get back to you in 24 hours</p> 
           <label for="name">Full Name</label>
           <input placeholder="Full Name" id="name" type="text"></input>
           <label for="Email">Email</label>
           <input placeholder="Email"  id="Email"  type="text"></input>
           <label for="Message"> Message</label>
           <input placeholder="Type a message"  id="Message"  type="text"></input>
           <button>send</button>
        </div></div>
    )
}
