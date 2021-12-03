import React, { useState } from 'react';

//material ui appbar
import { AppBar, Toolbar, Button } from "@material-ui/core";

import child from "./child.png";
import logo from "./logo.png"

//css file
import "./Header.css";

const Header = (props) => {

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div>
                        <img src={child} alt="" /><img src={logo} alt="" />
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">

                        <span className="header_link_color" >Todays WOD</span>
                        <span className="header_link_color" >
                            <button className="get_fit_button">Get FIT Now</button>
                        </span>
                        <span className="header_link_color">
                            <Button className="toggle_button"><i class="fa fa-bars"></i></Button>
                        </span>
                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <div>
                                <img src={child} alt="" /><img src={logo} alt="" />
                            </div>
                            <span className="logout_Pointer_cursor mt-2">
                                Todays WOD
                            </span>

                            <span className="logout_Pointer_cursor">
                                Get FIT Now
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
