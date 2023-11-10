import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navlist">
            <ul>
                <li><Link to="/Home">HOME</Link></li>
                <li><Link to="/About">About</Link></li>
                <li>
                    <Link to="/products">PRODUCTS</Link>
                </li>
                <li><Link to="/Contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar
