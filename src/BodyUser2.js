import React from "react";
import "./Body.css";
import Image from 'react-bootstrap/Image';
import logo from './logo.jpg'

function Body2(){
    return(
        <div className="division2">
            <h1 className="font1">Book Ransom</h1>
                <Image src={logo}
                       alt="logo"/>
                       <br></br>
        </div>
    );
}
export default Body2;