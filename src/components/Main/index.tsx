import React from 'react'
import Stepper from '../Stepper';
import BG from "./../../assets/bg3.png"
import "./styles.scss"
const Main = () => {
  const steps = [
    { title: 'Browser Company Info', content: 'Step 1 content' },
    { title: 'Director Info', content: 'Step 2 content' },
    { title: 'Finacial Info', content: 'Step 3 content' },
    { title: 'Past Performance Details', content: 'Step 4 content' },
    { title: 'Document Upload', content: 'Step 5 content' }
  ];
  return (
    <div style={{
      backgroundImage: `url(${BG})`,
    }} className='main-wrapper'>
      <Stepper steps={steps} />
    </div>
  )
}

export default Main