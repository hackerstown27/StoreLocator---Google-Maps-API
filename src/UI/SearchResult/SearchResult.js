import React from "react";

import classes from "./SearchResult.module.css";
import Item from "./Item/Item";
import Spinner from "../Spinner/Spinner";

const SearchResult = (props) => {

    let content = null;

    if(!props.searchQuery){
        content = <p className={classes.Initial}><span>Search</span> to See Results</p>;
    } else {
        content = props.storesFound.map((store, index) => {
            return (
                <div key={store.id}>
                    <Item 
                        selectStore={store}
                        address={store.address}
                        phoneNo={store.phoneNo} 
                        identifier={index+1} 
                        onSelectStoreHandler={props.onSelectStoreHandler}/>
                    <hr/>
                </div>
            )
        })
    }

    if (content.length === 0){
        content = <Spinner />
    }

    return (
        <div className={classes.SearchResult}>
            {content}
        </div>
    );
}

export default SearchResult;