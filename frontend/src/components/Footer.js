import { Link } from "react-router-dom";

import emailIcon from './icons/envelope-solid.svg';
import linkedinIcon from './icons/linkedin-in.svg';
import facebookIcon from './icons/facebook-f.svg';
import twitterIcon from './icons/twitter.svg';
import homeIcon from './icons/house-solid.svg';
import booksIcon from './icons/book-solid.svg';
import searchIcon from './icons/square-twitter.svg';
import uploadIcon from './icons/upload-solid.svg';

const Footer = () => {
    return (
    <footer>
        <div className="footer-contact-div">
            <h2>Contact Me</h2>
            <div className="contact-contents">
                <Link to='' ><p>Email <img className="icon" src={emailIcon} alt=""/></p></Link>
                <Link to='' ><p>LinkedIn <img className="icon" src={linkedinIcon} alt=""/></p></Link>
                <Link to='' ><p>Twitter <img className="icon" src={twitterIcon} alt=""/></p></Link>
                <Link to='' ><p>Facebook <img className="icon" src={facebookIcon} alt=""/></p></Link>
            </div>
        </div>
        <div className="footer-about-div">
            <h2>About Me</h2>
            <div className="about-contents">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatem dolorem quos veniam, maxime quis, recusandae 
                    quas repellat ex ea obcaecati exercitationem illo numquam 
                    porro, eos magni facilis tempora saepe accusantium!
                </p>
                <p>&copy; MHN Company</p>
            </div>
        </div>
        <div className="footer-navigation-div">
            <h2>Navigation</h2>
            <nav className="navigation-contents">
                <p><Link to='/'>Home <img className="icon" src={homeIcon} alt=""/></Link></p>
                <p><Link to='/api/'>Books <img className="icon" src={booksIcon} alt=""/></Link></p>
                <p><Link to='/api/search'>Search <img className="icon" src={searchIcon} alt=""/></Link></p>
                <p><Link to='/api/upload'>Upload <img className="icon" src={uploadIcon} alt=""/></Link></p>
            </nav>
        </div>
        <div className="">

        </div>
    </footer>
    )
}
export default Footer;