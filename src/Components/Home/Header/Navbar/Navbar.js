import { faFacebook, faGooglePlus, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import brandLogo from '../../../../Icon/RedSecurity.png'
import './Navbar.css'
const Navbar = () => {

    return (
        <div class="fixed-top">
            <header class="topbar">
                <div class="container">
                    <div class="row">

                        <div class="col-sm-12">
                            <ul class="social-network">
                                <li><a class="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a class="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a class="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a class="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                <li><a class="waves-effect waves-dark" href="/"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
            <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img class='brandLogo' src={brandLogo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to='/home'>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/userDashboard">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/dashboard">admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/userDashboard"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;