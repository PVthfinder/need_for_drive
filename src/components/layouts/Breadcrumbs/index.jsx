import React from "react";

import {breadscrumbs} from "../../../assets/db";

import "./Breadcrumbs.scss";

function Breadscrumbs() {
    return (
        <nav className="breadscrumbs">
            {breadscrumbs.map((link) => (
                <a key={link} href="#!">{link}</a>
            ))}
        </nav>
    )
}

export default Breadscrumbs
