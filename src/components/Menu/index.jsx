import React, {useState} from "react";
import classNames from 'classnames';

import Link from "./Link";
import Social from "./Social";

import {links, socials} from '../../assets/db';

import "./Menu.scss";
import "./Links.scss";
import "./Socials.scss";
import "./OpenedMenu.scss";

function Menu() {    
    const [openMenu, setOpenMenu] = useState(false);

    const openedClass = openMenu ? "opened" : null;

    return (
        <>
            <div className="menu">
                <div 
                    className={classNames("menu__icon", openedClass)} 
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <span/>
                </div>
                <button className={classNames("menu__lang_switch", openedClass)}>
                    Eng
                </button>
            </div>
            <div 
                className={classNames("opened_menu", openedClass)}
            >
                <div className="menu__links">
                    {links.map((link, index) => (
                        <Link 
                            key={link.title} 
                            title={link.title} 
                            path={link.path}
                            openedClass={openedClass}
                            index={index}
                            linksArr={links}
                        />
                    ))}
                </div>
                <div className="menu__socials">
                    {socials.map((link, index) => (
                        <Social 
                            key={`social${index}`} 
                            img={link.img} 
                            path={link.path}
                            openedClass={openedClass}
                            index={index}
                            socialsArr={socials}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu;
