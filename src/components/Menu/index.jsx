import React, {useContext} from "react";
import classNames from 'classnames';

import { AppContext } from '../../context';

import Link from "./Link";
import Social from "./Social";

import {links, socials} from '../../assets/db';

import "./Menu.scss";
import "./Links.scss";
import "./Socials.scss";
import "./OpenedMenu.scss";

function Menu({isOrderPage}) {    
    const {openMenu, setOpenMenu} = useContext(AppContext);

    const menuClasses = classNames(
            "menu__icon", 
            {[`opened`]: openMenu}, 
            {[`menu_order`]: isOrderPage}
        )

    const openedMenuClasses = classNames(
            "opened_menu", 
            {[`opened`]: openMenu},
            {[`order_menu`]: isOrderPage}
        )

    return (
        <>
            <div className="menu">
                <div 
                    className={menuClasses} 
                    onClick={() => setOpenMenu()}
                >
                    <span/>
                </div>
                <button 
                    className={classNames(
                        "menu__lang_switch", 
                        {[`opened`]: openMenu}
                    )}
                >
                    Eng
                </button>
            </div>
            <div 
                className={openedMenuClasses}
            >
                <div className="menu__links">
                    {links.map((link, index) => (
                        <Link 
                            key={link.title} 
                            title={link.title} 
                            path={link.path}
                            openedClass={{[`opened`]: openMenu}}
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
                            openedClass={{[`opened`]: openMenu}}
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
