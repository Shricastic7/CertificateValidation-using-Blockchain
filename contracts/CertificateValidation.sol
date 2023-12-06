// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateValidation {
    address public owner;
    mapping(string => bool) private certificates;

    event CertificateAdded(string certificateHash);
    event CertificateValidated(string certificateHash);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addCertificate(string memory certificateHash) public onlyOwner {
        certificates[certificateHash] = true;
        emit CertificateAdded(certificateHash);
    }

    function validateCertificate(string memory certificateHash) public view returns (bool) {
        return certificates[certificateHash];
    }
}
