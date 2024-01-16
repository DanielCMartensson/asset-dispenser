import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import React from 'react'
import "../Styles/Minting.css"
import AssetDispenserNfts from '../../AssetDispenserNfts.json';

const AssetDispenserNftsAddress = "0x1E15676604e11574e65Ec52C7A9F12eB577CB9a6";

const Minting = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [accounts, setAccounts] = useState([]);
  const [isPublicMint, setPublicMint] = useState(true);
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
        AssetDispenserNftsAddress,
        AssetDispenserNfts.abi,
        signer
      );
      if (isPublicMint) {
        try {
          const response = await contract.publicMint("ipfs://QmcV9e7ujNUhW7zUWUQ8MsFcjbgtZ2F61iJC4jpqoCDrT8", BigNumber.from(mintAmount), {
            value: ethers.utils.parseEther((0.001*mintAmount).toString())           
          });
          setMintSuccess(true);
          console.log("response: ", response);
        } catch (err) {
          console.log("error: ", err)
        }
      } else {
          try {
          const response = await contract.prepaidMint(BigNumber.from(mintAmount), {
            value: ethers.utils.parseEther((0.01*mintAmount).toString())           
          });
          setMintSuccess(true);
          console.log("response: ", response);
        } catch (err) {
          console.log("error: ", err)
        }
      };
    }
  }

  const handleDecrement = () => {    
      if (mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (isPublicMint && mintAmount >= 3) return;
    if (mintAmount >= 100) return;
    setMintAmount(mintAmount + 1);
  }

  return (
  <>
    {isConnected ? (
    <section className='how_section'>
      <div className='steps'>
          <h2 className='step_header'>1</h2>
          <p>Select either the <b>public minting</b> or a <b>prepaid minting</b></p>
      </div>
      <div className='steps'>
          <h2 className='step_header'>2</h2>
          <p>Select the number of items. Max 3 for public minting</p>

      </div>
      <div className='steps'>
          <h2 className='step_header'>3</h2>
          <p>Press the <b>MINT NOW</b> button and sign the transaction</p>

      </div>
    </section>
    ) 
    : <></>     
    }
    <section className="minting-section">    
      <div className="minting-container">
      {isConnected ? (
        <div>
          {isPublicMint ? (
            <div className='public_mint_box'/>
          ) :
          (
            <div className='private_mint_box'/>
          )}
        </div>
      ): (
        <div className='info_box'>
          <h1 className='get_Started_headline'>Please connect your wallet</h1>
          <p className='connect_wallet_text'>In order to get started you need to connect your wallet. In doing so allows us to check wether or not you are eligable for any mint. </p>
        </div>
      )}
        {isConnected ? (
          <div className='minting_options'>
          {isPublicMint ? (
            <div className='info_container'>
                <h2> Public minting</h2>
                <p> If the public minting is open, you can mint.</p>
                <button className='opt_btn' onClick={handleMintOptions}>To Prepaid Mint</button>
            </div>
          ) : (
            <div className='info_container'>
                <h2> Prepaid minting</h2>
                <p> If you have prepaid, you can start minting</p>
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
