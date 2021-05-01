import React from 'react';
import './Footer.css'








function FooterUser() {
    return (
        <div className="footer">
            <ul className="ultag">
                <li className="litag">
                <a className="atag" href="/home/user/AboutUs">About Us</a>
                </li>
                <li className="litag">
                <a className="atag" href="/home/user/HowTo">How to Book Ransom</a>
                </li>
                <li className="litag">
                <a className="atag" href="/home/user/Forum">Forum</a>
                </li>
                
            </ul>
            <ul className="ultag1">
                <li className="litag">
                <a className="atag" href="/home/user/Press">Press & Media</a>
                </li>
                <li className="litag">
                <a className="atag" href="/home/user/Team">Team</a>
                </li>
                <li className="litag">
                <a className="atag" href="/home/user/Contact">Contact Us</a>
                </li>
                
            </ul>
            <ul className="ultag2">
                <li className="litag">
                <a className="atag1" href="/home/user/Press">Press & Media</a>
                <a className="atag1" href="/home/user/Privacy">Privacy Policy</a>
                </li>
                <li className="litag">
                <i className="itag" href="#action3.1">©2020-2021 Honeycombbook.tk</i>
                </li>
                
            </ul>

        </div>

    );
}
export default FooterUser