import { useState } from 'react';
import './button.css';

export default function Button(props) {
  return (
    <div className="button" id='button'>
        <a target="_blank" href={props.ButtonLink}>{props.buttonIcon && (<i className='fa-solid fa-arrow-up-right-from-square'></i>)}{props.ButtonText}</a>
    </div>
  );
}

