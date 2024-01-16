import React from 'react'
import '../Styles/Main.css';
import camping from "../../assets/camping.png"
import device from "../../assets/device.png"
import { Link } from 'react-router-dom';

const Main = () => {
  console.log("Main");


  return (
    <>
    <section className='main-section' >
      <div className="main-container" >    
      <div className="fancy-question">
        <p className='question'>Ready to bring your company to web 3?</p>
      </div>        

      <div className="main-header">
        <h1 className='slogan_text'>Escape centralized data and join the future.</h1>  
      </div>
      <p className='added_text'>The asset dispenser is an easy way for your company to take part of the future. We help you to get into web 3 in an easy manner.</p>
      </div>
    </section>

    <section className='examples-page'>
      <div>
        <p className='gaming_story'>In the immersive realm of virtual gaming, a weekly challenge beckoned players to conquer with their trusty gamepads. A skilled champion emerged, clutching a unique NFT that forever encapsulated their digital victory.</p>
      </div>
      <div ><img src={device} alt="gamepad" height={700}/></div>
      <div ><img src={camping} alt="camping" height={660} /></div>
        <div>
          <p className='gaming_story'>
In the realm of outdoor exploration, a weekly challenge prompted campers to showcase their idyllic sites. A nature enthusiast secured a unique NFT, immortalizing their serene camping spot in the digital landscape of blockchain.          </p>
        </div>
      </section>
      <div className='start_minting'>
          <Link to="/minting" className="cta_btn" >LET'S GET STARTED!</Link>
      </div>
    </>
  )
}

export default Main
