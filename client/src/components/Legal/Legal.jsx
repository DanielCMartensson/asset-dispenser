import React from 'react'
import "../Styles/Legal.css"

const Legal = () => {
  return (
    <section className='legal-section'>
      <div className="nft_box">
        <h2>What are NFTs?</h2>
        <p>
          Non-fungible tokens are unique digital tokens that represent proof of ownership of a tangible or intangible asset (or both). Each NFT’s metadata and identification code are unique, so no two are identical. This is why NFTs are non-fungible. 
        </p>
        <p>
          When an NFT is created, or minted, it gets timestamped and stored in an open blockchain. The blockchain is essentially a public digital ledger, evidencing ownership and transfers of ownership.
          Information on the blockchain can’t be edited, so the NFT’s block serves as permanent proof of ownership. 
          When you buy an NFT, you’re essentially buying a piece of code that links to an asset. The rights that come along with that piece of code are crucial to understand.
        </p>
        <p>
          Are NFTs legally protected under copyright law? The answer is both yes and no.
          The artwork or asset the NFT links to is protected under copyright law. However, the token on the blockchain isn’t. It’s like hanging a print of a modern painting on your wall. You don’t own the original work or the rights to reproduce it — you just own a copy of the work.
        </p>              
      </div>

      <div className='sec_box'>
        <h2>Hola baloola</h2>        
      </div>

    </section>
  )
}

export default Legal
