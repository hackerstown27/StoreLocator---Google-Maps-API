import React from "react";

import classes from "./SearchBox.module.css";

const SearchBox = (props) => {
    return (
        <div className={classes.SearchBox}>
            <input type="text" placeholder="Zip Code" value={props.searchQuery} onChange={props.onSearchQueryChange}/>
            <span><i className="fas fa-search"></i></span>
        </div>
    )
}

export default SearchBox;