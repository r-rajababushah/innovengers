import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Navigation.css";

export default function Navigation() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/logo.jpg" style={{ width: '100px', height: '82px', borderRadius: '5px' }} />
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to={'/'}>HOME</Link></li>
                        <li><Link to={'/Search'}>SEARCH</Link></li>
                        <li><Link to={'/hotels'}>HOTELS</Link></li>
                        <li><Link to={'/resturants'}>RESTURANTS</Link></li>
                        <li><Link to={'/underratedplaces'}>UNDERRATED PLACES</Link></li>
                        <li><Link to={'/emergencynumber'}>EMERGENCY NUMBERS</Link></li>
                    </ul>
                </div>
                <div className="signup">
                    <Link to={'#'}>Sign Up / Log In</Link>
                </div>
            </div>
            <Outlet />
            <Footer />
           
        </>
    )
}