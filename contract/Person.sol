// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Person {

    struct P_Details {
        string F_Name;
        string Cnic;
       
    }

    mapping(string => P_Details) public getDetails;

    function addDetails(string memory  name,string memory f_name,string memory cnic)public{
        getDetails[name] = P_Details(f_name,cnic);
    }

    function getCnic(string memory name)public view returns(string memory){
        return getDetails[name].Cnic;
    }

    
    function getFName(string memory name)public view returns(string memory){
        return getDetails[name].F_Name;
    }


}