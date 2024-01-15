import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import React from 'react'
import "../Styles/Minting.css"
import GameNft from '../../GameNft.json';

const GameNftAddress = "0x180B68507CB960a3314141F174B0dd71b5a8DA97";

const Minting = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [accounts, setAccounts] = useState([]);
  const [isPublicMint, setPublicMint] = useState(false);
  /* const [isPublicMintOpen, setPublicMintOpen] = useState(); */
  const isConnected = Boolean(accounts[0]);
  const [mintSuccess, setMintSuccess] = useState(false)

  const handleMintOptions = () => {
    setPublicMint(!isPublicMint)
  };

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
        GameNftAddress,
        GameNft.abi,
        signer
      );
      try {
        const response = await contract.publicMint("ipfs://QmcV9e7ujNUhW7zUWUQ8MsFcjbgtZ2F61iJC4jpqoCDrT8", BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.01*mintAmount).toString())           
        });
        setMintSuccess(true);
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
      <div className="minting-container">
      {isConnected ? (
        <div className='info_box_connected'>
        </div>
      ): (
        <div className='info_box'>
          <h1>How to get started</h1>
          <p>In order to get started you need to connect your wallet. I doing so allows us to check wether or not you are eligable for any mint. </p>
        </div>
      )}
        {isConnected ? (
          <div className='minting_options'>
          {isPublicMint ? (
            <div className='info_container'>
                <h2> Public minting</h2>
                <p> If the public minting is open, you can mint...</p>
                <button className='opt_btn' onClick={handleMintOptions}>To Prepaid Mint</button>
            </div>
          ) : (
            <div className='info_container'>
                <h2> Prepaid minting</h2>
                <p> If you have been in contact with us and your wallet is prepaid, you can start minting</p>
                <button className='opt_btn' onClick={handleMintOptions}>To Public Mint</button>
            </div>
          )}
            <div>
              <button className='decrement_btn' onClick={handleDecrement}>-</button>
              <input className='amount_input' type='number' readOnly value={mintAmount}></input>
              <button className='decrement_btn' onClick={handleIncrement}>+</button>
            </div>
            <button className='opt_btn' onClick={handleMint}>Mint Now</button>
          </div>
        ) 
        : (<></>)
        }
      </div>
      <div>
        {mintSuccess ? (
            <dialog open>
              <h2>Congratulations, you have successfully minted</h2>
              <form method='dialog'>
              <button className='opt_btn'>Ok</button>
              </form>
            </dialog>
        ) : <></>
        }
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
