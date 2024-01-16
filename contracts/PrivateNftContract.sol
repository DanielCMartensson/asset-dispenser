// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetDispenserNftsPrivateCollection is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    Ownable
{
    uint256 private _nextTokenId;
    string internal baseTokenUri;
    bool public prepaidMintOpen = true;

    mapping(address => bool) public prepaidList;

    constructor(
        address initialOwner
    )
        ERC721("AssetDispenserNftsPrivateCollection", "ADPC")
        Ownable(initialOwner)
    {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function prepaidMint(string memory uri) public payable {
        require(prepaidMintOpen == true, "Your company is not authorized");
        require(
            prepaidList[msg.sender],
            "Your company adress is not authorized"
        );
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function editMintingOptions(bool _prepaidMintOpen) external onlyOwner {
        prepaidMintOpen = _prepaidMintOpen;
    }

    function setPrepaidList(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            prepaidList[addresses[i]] = true;
        }
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
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
