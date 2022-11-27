import logo from "../logo.jpg";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      
    } catch (error) {
      console.log(error);
    }
    navigate('/');
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Casper
        </Link>

        <div className="d-flex">
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Area Administrativa
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {user ? (
                <>
                  <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                </>
              ) : (
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;