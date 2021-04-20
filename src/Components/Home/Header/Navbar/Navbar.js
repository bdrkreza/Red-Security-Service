import { faFacebook, faGooglePlus, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import brandLogo from '../../../../Icon/RedSecurity.png'
import './Navbar.css'
const Navbar = () => {
    const [loggedInUser,] = useContext(UserContext);
    return (
        <div className="fixed-top">
            <header className="topbar">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12">
                            <ul className="social-network">
                                <li><a className="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a className="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a className="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a className="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                <li><a className="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><img className='brandLogo' src={brandLogo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/aboutUs'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {
                                loggedInUser.email ? <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li> : null
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;