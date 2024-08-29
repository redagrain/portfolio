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
          <h3><a href="mailto:jobs@redagrain.website">jobs@redagrain.website</a></h3>
        </div>
        <div className="contact_options">
          <div className="address">
            <i class="fa-solid fa-location-dot"></i>
            <h3>Tangier, Morocco</h3>
          </div>
          <div className="icons">
            <ul>
              <li><a target="_blank" href="https://www.linkedin.com/in/redagrain"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a target="_blank" href="https://www.github.com/redagrain"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="mailto:jobs@redagrain.website"><i class="fa-solid fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

