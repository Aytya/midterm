import './navbar.css'
import React, {useState} from "react"
import {Chat, Notifications, Person, Search} from "@mui/icons-material"
import {Link} from "react-router-dom";
import { Searchs } from '../HomePage/Share/Data';
function Navbar({props}) {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const performSearch = () => {
        const filteredResults = props.search.filter((item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase())
        );

        setSearchResults(filteredResults);
    };
    return(
        <div className="topbar-container">
            <div className="topbar-left">
                <span className="topbar-logo"><Link className="topbar-logo-link" to = "/home">Twitter Clone</Link> </span>
            </div>
            <div className="topbar-center">
                <div className="search-bar">
                    <Search className="search-icon"/>
                    <input placeholder="Search..." className="search-input"/>
                    <div className="search-results">
                        {searchResults.map((result, index) => (
                            <div key={index} className="search-result-item">
                                {/* Display the search results here */}
                                {result.title}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="topbar-right">
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person></Person>
                        <span className="topbar-icon-bage">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat></Chat>
                        <span className="topbar-icon-bage">2</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications></Notifications>
                        <span className="topbar-icon-bage">1</span>
                    </div>
                </div>
                <Link to="/profile"><img src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" className="topbar-img"></img></Link>
            </div>
        </div>
    )


}

export default Navbar;