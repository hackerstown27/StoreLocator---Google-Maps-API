import React from "react";

import classes from "./Item.module.css";

const Item = (props) => {
    return (
        <div className={classes.Item} onClick={() => {props.onSelectStoreHandler(props.selectStore)}}>
            <div className={classes.Address}>
                {props.address}
                <span className={classes.Phone}>{props.phoneNo}</span>
            </div>
            <div className={classes.Identifier}>
                {props.identifier}
            </div>
        </div>
    )
}

export default Item;