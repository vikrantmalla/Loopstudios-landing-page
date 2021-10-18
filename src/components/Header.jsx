import React, { useState } from 'react'


const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <header className="banner">
                <nav className="nav-bar">
                    <div className="logo">
                        <img src="images/logo.svg" alt="logoss" />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </nav>
                <div className="overlay-heading">
                    <h1>Immersive experiences that deliver</h1>
                </div>
            </header>



        </>
    )
}

export default Header


