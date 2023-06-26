import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflow: 'auto', border: '5px solid rgba(128, 149, 167)', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;