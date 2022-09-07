import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <i className="bi-cup-hot-fill me-3"></i>
                    {props.name}
                </a>
                <ul className="navbar-nav flex-row">
                <li className="nav-item">
                        <Link to="/orders" className="nav-link text-light mx-1">
                            Orders
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link text-light mx-1">
                            Pricing
                        </Link>
                    </li>
                
                </ul>

            </div>
        </nav>
    );
}

export default Header;