import { useState } from 'react';
import './Skills.css';
import Title from '../../MiniComponents/Title/title';
import Skills_Image from '../../Assets/Frame-4.png';

export default function Skills() {

  return (
    <div className="Skills" id='Skills'>
      <Title title={'Skills'}/>
      <div className="SkillsContainer">
      </div>
    </div>
  );
}

