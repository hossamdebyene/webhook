import React from "react";
import Button from "react-bootstrap/Button"
import "./Body.css";
import Image from 'react-bootstrap/Image';
import logo from './logo.jpg';
import {useHistory} from 'react-router-dom';

function Body2(){
    let history = useHistory();
    const Signup = () => {
        history.push('/home/Signup');
    }
    return(
        <div className="division2">
            <h1 className="font1">Book Ransom</h1>
                <Image src={logo}
                       alt="logo"/>
                       <br></br>
                <Button  variant="primary" size="lg" className="btn1" onClick={Signup}>Sign Up <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                                </svg>          
                </Button>
        </div>
    );
}
export default Body2;