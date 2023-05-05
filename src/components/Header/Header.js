import "./Header.scss";
import logo from "../../Assets/logo/UKG-logo.png";
import searchIcon from "../../Assets/Vector/Search.svg";
import { useNavigate, Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <div className="nav__logoContainer">
                <Link to="https://www.ukg.com/"><img className="nav__logo" src={logo} alt="UKG company logo"/></Link>
            </div>
            <div className="nav__links">
                <Link to="https://www.ukg.com/" className="nav__link">Upcoming Events</Link>
                <Link to="https://www.ukg.com/" className="nav__link">Chatter</Link>
                <Link to="https://www.ukg.com/" className="nav__link">Staff</Link>
            </div>
            <div className="nav__searchAndButton">
                <img src={searchIcon} alt="Search icon"/>
                <button className="nav__obButton" type="button"><a className="nav__buttonLink" href="/">Onboarding Survey</a></button>
            </div>
        </nav>
    )
}

export default Header;