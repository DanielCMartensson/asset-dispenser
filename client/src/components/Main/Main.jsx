import React from 'react'
import './Main.css';
import camping from "../../assets/camping.png"
import device from "../../assets/device.png"

const Main = () => {
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
      <p>The asset dispenser is an easy way forour company to take part of the future. We help you to get into web 3 in an easy manner.</p>
      </div>
    </section>

    <section className='examples-page'>
    <div className='text_box'>
      <p>Unlesh the potential of in game assets that live on the blockchain, backed by a strong community</p>
    </div>
    <div><img src={camping} alt="picture" height={600}/></div>
    <div><img src={device} alt="picture" height={500}/></div>
      <div className='text_box'>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure excepturi dolor esse sed mollitia nulla adipisci est ducimus officiis. Perferendis asperiores vitae, ipsa accusamus quibusdam aliquid ullam non et. 
        </p>
       </div>
    </section>
    <div className='btn_box'>
        <button className='start_button'>LET'S GET STARTED!</button>
    </div>
    </>
  )
}

export default Main
