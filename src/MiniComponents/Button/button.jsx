import { useState } from 'react';
import './button.css';
// #TODO fix button Component
export default function Button({ ButtonText, ButtonLink }) {

  return (
    <div className="button" id='button'>
        <a href={{ButtonLink}}>{{ButtonText}}</a>
    </div>
  );
}

