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
        <p>Ready to bring your company to web 3?</p>
      </div>        

      <div className="main-header">
        <h1>Escape centralized data and join the future.</h1>  
      </div>
      <p>The asset dispenser is an easy way fory our company to take part of the future. We help you to get into web 3 in an easy manner.</p>
      </div>
    </section>

    <section className='examples-page'>
    <div className='text_box'>
      <p>Unleash the potential of in-game assets that live on the blockchain, backed by a strong community</p>
    </div>
    <div className='nft_box_right' ><img src={camping} alt="camping" height={500}/></div>
    <div><img src={device} alt="gamepad" height={500}/></div>
      <div className='text_box_right'>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure excepturi dolor esse sed mollitia nulla adipisci est ducimus officiis. Perferendis asperiores vitae, ipsa accusamus quibusdam aliquid ullam non et. 
        </p>
       </div>
    </section>
    <div className='start_minting'>
        <Link to="/minting" className="cta_btn" >LET'S GET STARTED!</Link>
    </div>
    </>
  )
}

export default Main
