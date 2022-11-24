import React, { useState } from "react";
import "./Nevbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faPhone,
    faTimes,
    faHome,
    faBlog,
    faContactCard,
    faSign,
    faCircleInfo,
    faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import img1 from "../../images/login.jpeg";
import img2 from "../../images/icons/logo.webp";
import img3 from "../../images/login.jpeg";
import { HashLink as Link } from "react-router-hash-link";

export default function Nevbar() {
    const [move, setMove] = useState(true);

    const [humbar, sethumbar] = useState({
        bar: true,
        left: false,
        checkvalue: false,
    });
    let { bar, left, checkvalue } = humbar;
    let [val, setVal] = useState(0);
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (window.innerWidth > 900) {
            var scroll_current = window.pageYOffset;
            console.log(scroll_current);

            if (scroll_current > val) {
                setMove(false);
            } else {
                setMove(true);
            }

            setVal(scroll_current);
            console.log(val, "after");
        }
    }

    function changetimes() {
        sethumbar({ bar: !bar, left: false, checkvalue: !checkvalue });
        console.log(bar, left, checkvalue, "oniconclick");
    }
    let move_left = () => {
        if (window.innerWidth < 900) {
            sethumbar({ bar: !bar, left: !left, checkvalue: false });
            console.log(bar, left, checkvalue);
        }
    };
    function chankchange(e) {
        console.log(e.target.checked);
        // sethumbar({checkvalue:!checkvalue})
    }
    return (
        <>
            <input
                type="checkbox"
                checked={checkvalue}
                onChange={chankchange}
                id="so"
            />
            <label htmlFor="so">
                <FontAwesomeIcon
                    onClick={changetimes}
                    icon={bar ? faBars : faTimes}
                    className="icon1"
                />
            </label>
            {move ? (
                <div className="header">
                    <NavLink to="/Home">
                        {" "}
                        <img className="header-logo" src={img2} alt="" />
                    </NavLink>
                    <NavLink to="/home/profile" style={{"color":"black"}}>
                        <div className="header-right-profile">
                            <FontAwesomeIcon icon={faUserGraduate} className="icon2" />
                            &nbsp; Profile
                        </div>
                    </NavLink>

                    <ul
                        className="unorder-list"
                        style={!left ? null : { transform: "translateX(-102%)" }}
                    >
                        <li onClick={move_left}>
                            {" "}
                            <Link smooth to="#">
                                {" "}
                                <FontAwesomeIcon icon={faHome} className="icon2" />
                                &nbsp; HOME{" "}
                            </Link>
                        </li>
                        <li onClick={move_left}>
                            {" "}
                            <Link smooth to="#about">
                                {" "}
                                <FontAwesomeIcon icon={faCircleInfo} className="icon2" />
                                &nbsp; ABOUT
                            </Link>
                        </li>
                        <li onClick={move_left}>
                            {" "}
                            <Link smooth to="#contact">
                                {" "}
                                <FontAwesomeIcon icon={faContactCard} className="icon2" />
                                &nbsp; CONTACT
                            </Link>
                        </li>
                        <li onClick={move_left}>
                            {" "}
                            <NavLink to="/Blog">
                                <FontAwesomeIcon icon={faBlog} className="icon2" />
                                &nbsp; BLOG
                            </NavLink>
                        </li>

                        {/* <li>
            
                    <FontAwesomeIcon icon={faPhone} className="icon2"/>&nbsp; Helpline
                
        </li> */}
                        <li>
                            {" "}
                            <NavLink className="list" to="/Login">
                                <FontAwesomeIcon icon={faSign} className="icon2" />
                                &nbsp;Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            ) : undefined}
        </>
    );
}
