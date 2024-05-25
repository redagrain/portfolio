import { useState } from 'react';
import './Contact.css';
import Title from '../../MiniComponents/Title/title';

export default function Contact() {

  return (
    <div className="Contact" id='Contact'>
      <Title title={'Contact Me'}/>
      <div className="contactContainer">
        <div className="contactContent">
          <p>I'm always looking for new and exciting projects. Feel free to contact me to discuss new opportunities or collaborations.</p>
          <h1>contact@redagrain.website</h1>
        </div>
        <div className="icons">
          <ul>
            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href=""><i class="fa-brands fa-github"></i></a></li>
            <li><a href=""><i class="fa-solid fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

