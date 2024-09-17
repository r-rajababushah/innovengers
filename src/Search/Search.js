import { Link } from "react-router-dom";
import "./Search.css";

export default function Search() {
    return (
        <div style={{}}>
            <div className="SearchBox">
                <input id="searchEl" type="search" placeholder="Search" />
                <Link to={"#"}><img id="searchIl" src="./searchi.png" alt=" Search" /></Link>
            </div>
            </div>
    )
}