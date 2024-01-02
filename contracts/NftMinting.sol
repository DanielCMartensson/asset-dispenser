// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameNft is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    uint256 public mintPrice;
    uint256 public totalAmount;

    bool public publicMintOpen = true;
    bool public prepaidMintOpen = true;

    mapping(address => uint256) public walletMints;
    mapping(address => bool) public prepaidList;

    constructor(
        address initialOwner
    ) ERC721("GameNft", "GNFT") Ownable(initialOwner) {
        mintPrice = 0.01 ether;
        totalAmount = 0;
        maxSupply = 100;
        maxPerWallet = 3;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function publicMint(string memory uri, uint256 quantity_) public payable {
        require(
            publicMintOpen == true,
            "Public minting is closed at the moment"
        );
        require(
            msg.value == quantity_ * mintPrice,
            "Not enough funds on your account"
        );
        require(
            totalAmount + quantity_ <= maxSupply,
            "Sorry, We are not able to mint your NFT due to maximum supply reached"
        );
        require(
            walletMints[msg.sender] + quantity_ <= maxPerWallet,
            "exceeded max limit for mints"
        );

        for (uint i = 0; i < quantity_; i++) {
            uint256 tokenId = _nextTokenId++;
            _safeMint(msg.sender, tokenId);
            _setTokenURI(tokenId, uri);
        }
    }

    function prepaidMint(string memory uri) public payable {
        require(prepaidMintOpen == true, "Your company is not authorized");
        require(
            prepaidList[msg.sender],
            "Your company adress is not authorized"
        );
        require(
            msg.value == 0.0001 ether,
            "Please make sure you have the required amount on your account"
        );
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function editMintingOptions(
        bool _publicMintOpen,
        bool _prepaidMintOpen
    ) external onlyOwner {
        publicMintOpen = _publicMintOpen;
        prepaidMintOpen = _prepaidMintOpen;
    }

    function setPrepaidList(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            prepaidList[addresses[i]] = true;
        }
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "ipfs://RTg2OEQ0NkY4MDA4RDEwQTA0MUQ6aWtTdUQ0TkRaZFV5QjVvMGFreEhHd2QzSlNIMGtaSGhVQ1Nnc3hxNDpnYW1lbmZ0ZXJjNzIx";
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
