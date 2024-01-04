import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import React from 'react'
import "../Styles/Minting.css"
import NftMinting from '../../NftMinting.json';

const Minting = () => {
  const mintingAddress = "";
  const [mintAmount, setMintAmount] = useState(1);
  const [accounts, setAccounts] = useState([]);
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if(window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  async function handleMint(){
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        mintingAddress,
        NftMinting.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02*mintAmount).toString()) 
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <>
    <section className="minting-section">
      <div className="main-container">
        <div className='info_box'>
          <h1>Lets get to minting</h1>
          <p>Try to mint...</p>
        </div>
        {isConnected ? (
          <div className='minting_options'>
            <div>
              <button className='decrement_btn' onClick={handleDecrement}>-</button>
              <input className='amount_input' type='number' readOnly value={mintAmount}></input>
              <button className='decrement_btn' onClick={handleIncrement}>+</button>
            </div>
            <button className='opt_btn' onClick={handleMint}>Mint Now</button>
          </div>
        ) 
        : (<p></p>)
        }
      </div>
      <div className='Info_container'>
        <div>
        <h2> Info about whats happening</h2>
        <p>lalala</p>
        </div>
      </div>
    </section>
    <section className='connect_wrapper'>
      <div className='connect_box'>
        {isConnected ? (<>
          <h2>Connected with account: </h2> <p>{accounts[0]}</p>
        </>
          ) : (
          <>
          <h2>Please connect your wallet to mint</h2>
          <button className='opt_btn' onClick={connectAccount}>Connect</button>
          </>
        )}
      </div>
    </section>
    </>
  )
}

export default Minting;
