import React, { useRef } from "react";
import './NavBar.css';

export default function NavBar ({ handleSearchRequest }) {
    const searchBarInput = useRef(null);
    const searchIconRef = useRef(null);
    const closeIconRef = useRef(null);

    const handleSearchBarOnChange = () => {
        if (searchBarInput.current.value == '') {
            closeIconRef.current.style.display = 'none';
            searchIconRef.current.style.display = 'block';
            searchBarInput.current.style.fontWeight = 'normal';
        } else {
            searchBarInput.current.style.fontWeight = 'bold';
        }
        handleSearchRequest(searchBarInput.current.value)
    }

    const handleSearchBarOnKeyUp = (event) => {
        searchIconRef.current.style.display = 'none';
        closeIconRef.current.style.display = 'block';

        if (event.key === 'Enter') {
            searchBarInput.current.blur();
        }
    }

    const HandleCloseIconClick = () => {
        searchBarInput.current.value = '';
        searchBarInput.current.style.fontWeight = 'normal';
        handleSearchBarOnChange();
    }

    return (
        <>
        <div className="container">
            <div className="navbar row">
                <div className="col-md-2">MoBooM</div>
                <div className="col-md-6 search-bar-container">
                    <span ref={searchIconRef} className="search-icon">⌕</span>
                    <span ref={closeIconRef} style={{display: 'none'}} onClick={HandleCloseIconClick} className="close-icon">x</span>
                    <input ref={searchBarInput} onBlur={handleSearchBarOnChange} onKeyUp={handleSearchBarOnKeyUp} className="form-control search-bar" type="text" placeholder="What do you want to buy today?"/>
                </div>
                <div className="col-md-4">
                    <span className="quick-links">Store</span>
                    <span className="quick-links">Account</span>
                    <span className="quick-links">Wishlist</span>
                    <span className="quick-links active">Basket</span>
                </div>
            </div>
        </div>
        </>
    );
}