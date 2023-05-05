// import Header from '../Header.js';

import './Poll.scss';

// import UserIcons from "../../assets";

function Poll() {
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
                                <h2 className='poll__card--title'>Create mutual learning opp</h2>
                                <p className='poll__card--percent'>41%</p>
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
                                    <img className='poll__card--img' src="the people" alt="profiles" />
                                </div>
                            </div>
                        </div>
                        <div className='poll__card'>
                            <div className='poll__card--sec'>
                                <h2 className='poll__card--title'>Create mutual learning opp</h2>
                                <p className='poll__card--percent'>41%</p>
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
                                    <img className='poll__card--img' src="the people" alt="profiles" />
                                </div>
                            </div>
                        </div>
                        <div className='poll__card'>
                            <div className='poll__card--sec'>
                                <h2 className='poll__card--title'>Create mutual learning opp</h2>
                                <p className='poll__card--percent'>41%</p>
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
                                    <img className='poll__card--img' src="the people" alt="profiles" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='poll__sec'>
                        <div className='poll__submit'>
                            <div className='poll__submit--data'>
                                <div className='poll__submit--vote'>Total Votes</div>
                                <div className='poll__submit--vote-count'>70</div>
                            </div>
                            <div className='poll__submit--link'>Add Suggestion</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Poll;