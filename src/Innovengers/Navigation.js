import { Outlet } from "react-router-dom";
import "./Navigation.css";
import "./Footer.css";

export default function Navigation() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/logo.jpg" style={{ width: '100px', height: '85px', borderRadius: '5px' }} />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SEARCH</a></li>
                        <li><a href="#">HOTELS</a></li>
                        <li><a href="#">RESTURANTS</a></li>
                        <li><a href="#">UNDERRATED PLACES</a></li>
                        <li><a href="#">EMERGENCY NUMBER</a></li>
                    </ul>
                </div>
                <div className="signup">
                    <a href="#">Sign Up</a>
                </div>
            </div>
            <Outlet />
            <div className="footer">
                <a href="#">Review</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Help</a>
                <a href="#">Complaints</a>
            </div>
        </>
    )
}