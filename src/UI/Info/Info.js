import React from "react";

import classes from "./Info.module.css";

const Info = (props) => {
    let statusClass = classes.Open;
    if(props.data.status === "close"){
        statusClass = classes.Close;
    }
    return (
        <div className={classes.Info}>
            <h1 className={classes.StoreName}>{props.data.storename}</h1>
            <span className={classes.Address}>{props.data.address}</span>
            <hr/>
            <span className={classes.PhoneNo}>{props.data.phoneNo}</span>
            <span className={statusClass}>{props.data.status} TODAY</span>
        </div>
    )
}

export default Info;