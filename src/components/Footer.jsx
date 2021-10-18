import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-left">
                    <img src="images/logo.svg" alt="footer_logo" />
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="social_media">
                        <img src="images/icon-facebook.svg" alt="facebook" />
                        <img src="images/icon-twitter.svg" alt="twitter" />
                        <img src="images/icon-pinterest.svg" alt="pinterest" />
                        <img src="images/icon-instagram.svg" alt="instagram" />
                    </div>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>


            </div>
        </>
    )
}

export default Footer
