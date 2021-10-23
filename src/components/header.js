import '../css/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <nav className="nav-container">
                <div className="image-container">
                    <img className="image" src="./luckymelogo.png" alt=""/>
                </div>
                <div className="login-container">
                    <Link to="/login" style={{textDecoration: "none"}}>
                        <p className="login">Logout</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;