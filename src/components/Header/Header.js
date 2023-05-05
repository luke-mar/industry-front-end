import "./Header.scss";
// import { logo } from "/";

function Header() {
    return (
        <nav className="nav">
            <div className="nav__logo"></div>
            <div className="nav__links">
                <a className="nav__link">Upcoming Events</a>
                <a className="nav__link">Chatter</a>
                <a className="nav__link">Staff</a>
            </div>
            <div className="nav__searchAndButton">
                <img src="" alt="Search icon"/>
                <button type="button"><a href="/">Onboarding Survery</a></button>
            </div>
        </nav>
    )
}

export default Header;