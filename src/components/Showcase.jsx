import React from 'react'

const Showcase = () => {
    return (
        <>
            <section className="container">
                <h1>Our creations</h1>
                <button className="creations__btn">See all</button>
                <ul className="showcase-grid">
                    <li className="showcase deep-earth">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-deep-earth.jpg" />
                            <img src="images/desktop/image-deep-earth.jpg" alt="earth" />
                        </picture>
                        <div className="overlay-text">
                            <h2>Deep earth</h2>
                        </div>
                    </li>
                    <li className="showcase night-arcade">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-night-arcade.jpg" />
                            <img src="images/desktop/image-night-arcade.jpg" alt="arcade" />
                        </picture>
                        <div className="overlay-text">
                            <h2>Night arcade</h2>
                        </div>
                    </li>
                    <li className="showcase soccer-team">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-soccer-team.jpg" />
                            <img src="images/desktop/image-soccer-team.jpg" alt="soccer" />
                        </picture>
                        <div className="overlay-text">
                            <h2>Soccer team VR</h2>
                        </div>
                    </li>
                    <li className="showcase the-grid">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-grid.jpg" />
                            <img src="images/desktop/image-grid.jpg" alt="car" />
                        </picture>
                        <div className="overlay-text">
                            <h2>The grid</h2>
                        </div>
                    </li>
                    <li className="showcase from-up">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-from-above.jpg" />
                            <img src="images/desktop/image-from-above.jpg" alt="valley" />
                        </picture>
                        <div className="overlay-text">
                            <h2>From up above VR</h2>
                        </div>
                    </li>
                    <li className="showcase pocket-borealis">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-pocket-borealis.jpg" />
                            <img src="images/desktop/image-pocket-borealis.jpg" alt="borealis" />
                        </picture>
                        <div className="overlay-text">
                            <h2>Pocket borealis</h2>
                        </div>
                    </li>
                    <li className="showcase the-curiosity">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-curiosity.jpg" />
                            <img src="images/desktop/image-curiosity.jpg" alt="curiosity" />
                        </picture>
                        <div className="overlay-text">
                            <h2>The curiosity</h2>
                        </div>
                    </li>
                    <li className="showcase fisheye">
                        <picture className="img-holder">
                            <source media="(max-width: 480px)" srcSet="images/mobile/image-fisheye.jpg" />
                            <img src="images/desktop/image-fisheye.jpg" alt="fisheye" />
                        </picture>
                        <div className="overlay-text">
                            <h2>Make it fisheye</h2>
                        </div>
                    </li>
                </ul>
            </section>

        </>
    )
}

export default Showcase
