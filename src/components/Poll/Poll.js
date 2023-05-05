// import Header from '../Header.js';

import './Poll.scss';
import { useState } from 'react';

import UserIcons from "../../Assets/images/users.png";

function Poll() {
    const [cli, setCli] = useState(0);
    function handler() {
        setCli(cli + 1);
    }


    if (cli === 0) {
        return (
            <>
                <section className='poll'>
                    <div className='poll__opt'>
                        <h1 className='poll__title'>Vote for our Next Team Event!</h1>
                    </div>
                    <div className='poll__opt'>
                        <div className='poll__sec'>
                            <div onClick={() => { handler() }} className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>Lunch & Learn at TacoStand</h2>

                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>

                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div onClick={() => { handler() }} className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>TedTalk Workshop</h2>

                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>

                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div onClick={() => { handler() }} className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>Escape Room</h2>

                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>

                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div onClick={() => { handler() }} className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>Non-Profit Food Drive</h2>

                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>

                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    if (cli > 0) {
        return (
            <>
                <section className='poll'>
                    <div className='poll__opt'>
                        <h1 className='poll__title'>Vote for our Next Team Event!</h1>
                    </div>
                    <div className='poll__opt'>
                        <div className='poll__sec'>
                            <div className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>Lunch & Learn at TacoStand</h2>
                                    <p className='poll__card--percent'>25%</p>
                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>
                                        <p className='poll__card--vote'>30 Votes</p>
                                        <p className='poll__card--link'>See All</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='poll__card--sec'>
                                        <img className='poll__card--img' src={UserIcons} alt="profiles" />
                                    </div>
                                </div>
                            </div>
                            <div className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>TedTalk Workshop</h2>
                                    <p className='poll__card--percent'>25%</p>
                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>
                                        <p className='poll__card--vote'>30 Votes</p>
                                        <p className='poll__card--link'>See All</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='poll__card--sec'>
                                        <img className='poll__card--img' src={UserIcons} alt="profiles" />
                                    </div>
                                </div>
                            </div>
                            <div className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>Escape Room</h2>
                                    <p className='poll__card--percent'>25%</p>
                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>
                                        <p className='poll__card--vote'>30 Votes</p>
                                        <p className='poll__card--link'>See All</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='poll__card--sec'>
                                        <img className='poll__card--img' src={UserIcons} alt="profiles" />
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => { handler() }} className='poll__card'>
                                <div className='poll__card--sec'>
                                    <h2 className='poll__card--title'>Non-Profit Food Drive</h2>
                                    <p className='poll__card--percent'>25%</p>
                                </div>
                                <div className='poll__card--sec'>
                                    <div className='poll__card--percent-bar'>
                                        <div className='poll__card--percent-bar--active'></div>
                                        <div className='poll__card--percent-bar--bg'></div>
                                    </div>
                                    <div className='poll__card--data'>
                                        <p className='poll__card--vote'>16 Votes</p>
                                        <p className='poll__card--link'>See All</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='poll__card--sec'>
                                        <img className='poll__card--img' src={UserIcons} alt="profiles" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }


}

export default Poll;