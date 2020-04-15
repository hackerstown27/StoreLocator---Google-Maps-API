import React from "react";

import classes from "./ControlPanel.module.css";
import SearchBox from "../../UI/SearchBox/SearchBox";
import SearchResult from "../../UI/SearchResult/SearchResult";

const ControlPanel = (props) => {
    return (
        <div className={classes.ControlPanel}>
            <h1 className={classes.Brand}>Store Locator</h1>
            <SearchBox searchQuery={props.searchQuery} onSearchQueryChange={props.onSearchQueryChange} />
            <SearchResult 
                storesFound={props.storesFound} 
                searchQuery={props.searchQuery} 
                onSelectStoreHandler={props.onSelectStoreHandler}/>
        </div>
    )
}

export default ControlPanel;