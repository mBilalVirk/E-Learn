import React, { useState } from 'react';


export default function Navbar({menu}) {
    const [sideNavStyle, setSideNavStyle] = useState({ right: "-250px" });

    

    const toggleNav = () => {
        if (sideNavStyle.right === "-250px") {
            setSideNavStyle({ right: "0" });
        } else {
            setSideNavStyle({ right: "-250px" });
        }
    }

    return (
        <>
            <nav id="sideNav" style={sideNavStyle}>
                <ul>
                    <li>
                        <a href="#header">HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT US</a>
                    </li>
                    <li>
                        <a href="#features">FEATURES</a>
                    </li>
                    <li>
                        <a href="#courses">COURSES</a>
                    </li>
                    <li>
                        <a href="#offer">OFFER</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <img src={menu} alt="" id="menuBtn" onClick={toggleNav} />
        </>
    );
}
