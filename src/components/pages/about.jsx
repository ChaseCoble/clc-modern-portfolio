import React from "react";
import profilePicture from "./../../assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Avid computer enthusiast beginning his journey into the computer sciences. I am currently attending a Full Stack Web Developer training program at Bottega University and have completed an IT Support certification through IBM on Coursera, and working through the Android Developer certification on Google certifications. 
As a father of four children under 11, I am opting to pursue my advancement in Computer Sciences through certifications and eventually personal projects.I am attracted to the Computer Science field because it is a growing and developing field that will allow me to always be growing and learning and increasing my value as an employee. I also feel most comfortable tackling complex problems with elegant solutions and have an intractable continuous - improvement mindset that has always made entry level work very invalidating for me. I love to learn new things and better methods so I am very excited to be in this field!
      </div>
    </div>
  );
}