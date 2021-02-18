import React from "react";
import "./style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import DraftsIcon from "@material-ui/icons/Drafts";
import Trainers from "../components/Trainers"
import ContactUs from "../components/ContactSection"
import "aos/dist/aos.css";

import AOS from "aos";

AOS.init({ delay: 500, duration: 2000 })

export default function index() {
  return (
    <>
      <div className="gymimg">
        <div>
          <h2>Sargsyans gym</h2>
          <div className="iconDiv">
            <FacebookIcon className="icons" />
            <LinkedInIcon className="icons" />
            <PhoneForwardedIcon className="icons" />
            <DraftsIcon className="icons" />
          </div>{" "}
        </div>

        <div className="spanDownloadBooklet"  data-aos="flip-left">
          {" "}<h2>FEEL THE POWER</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
          doloremque, nam consequuntur non quos praesentium, quidem quod vitae
          quasi, perferendis ratione sapiente atque quas deleniti?
        </div>
      </div>

      <Trainers/>
      <ContactUs/>
    </>
  );
}
