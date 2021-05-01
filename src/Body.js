import React, {useState} from "react";
import Button from "react-bootstrap/Button"
import {useHistory} from 'react-router-dom';

import "./Body.css";


function Body() {
    const [lang, setLang] = useState('');
    const [bcid, setBcid] = useState('');
    const [leg, setLeg] = useState('');
    let history = useHistory();
    const Signup = () => {
        history.push('/home/Signup');
    }
    const About = () => {
        history.push('/home/AboutUs');
    }
    const How = () => {
        history.push('/home/HowTo');
    }
    const bcidSearch = (bcid) =>{
        history.push('/home/Search');
    }
    const legSearch = (leg) =>{
        history.push('/home/Search');
    }
    const search = (e) => {
            if (!bcid && !leg){
                alert('What do you want to search' )
            }
            else if ( bcid!= null && !leg ){
                bcidSearch (bcid);
                setBcid('');
                setLeg('');
            }
            else if (!bcid && leg != null ){
                legSearch(leg);
                setBcid('');
                setLeg('');
            }
    }
    const trans = (e) => {
        setLang(e.target.value)
        if (lang === 'English'){
            history.push('/home');
        }
        else if (lang === 'François'){

        }

    }
    return (
        <div className="division">
            <form>
                <label className="space">Change your language</label>
                <br></br>
                <select name="language" id="language" form="languageform" className="spinner" 
                value={lang} onChange={trans} >
                    <option value="English">English</option>
                    <option value="François">François</option>
                    <option value="Deutsch">Deutsch</option>
                    <option value="Español">Español</option>
                    <option value="Italiano">Italiano</option>
                </select>
                <br></br>
                <label className="space">I found a book! Enter the BCID code here. </label>
                <br></br>
                <input type="Text" maxLength="3" size="15" className="in1"
                value={bcid} onChange={(e) => setBcid(e.target.value)}/>
                <span className="text"> –– </span>
                <input type="Text"maxLength="10" size="50" className="in2"
                value={leg} onChange={(e) => setLeg(e.target.value)}/>
                <Button variant="primary" size="lg" className="btn" onClick={search} >
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </Button>
            </form>
            <h1 className="font">What is Honeycomb Book?</h1>
            <ul className="line">
                <li className="lines"><em>
                    a modern-day message <br></br>
                    in a bottle
                    </em>
                    <br></br>- San Francisco Chronicle
                </li>
                <li className="lines"><em>
                    if you love your books, <br></br>
                    let them go
                    </em>
                    <br></br>- The New York Times
                </li>
                <li className="lines"><em>
                    an unlikely global <br></br>
                    sociology experiment
                    </em>
                    <br></br>- Book Magazine
                </li>
            </ul>
            <h3 className='texting' >A book reads the better which is our own, and has been so long known to us, that we know the topography of its blots, 
                and dog's ears, and can trace the dirt in it to having read it at tea with buttered muffins.</h3>
            <Button variant="outline-secondary" size="lg" className="btn2" onClick={About}>About Us</Button>
            <Button variant="outline-secondary" size="lg" className="btn2" onClick={How}>How to Honeycomb Book</Button>
            <Button variant="outline-secondary" size="lg" className="btn2" onClick={Signup}>Sign Up <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                                </svg> </Button>
        </div>    
        

    );
}
export default Body;