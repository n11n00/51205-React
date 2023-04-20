import React from "react";
import { NavLink } from "react-router-dom";


const OptionNavbarComponent = (props) => {
        const {titleOption,link} = props;
        const isActiveClass = ({isActive}) =>{
            return isActive ? 'active nav-link' : 'nav-link';
        };

    return (
        <NavLink to={`/category/${titleOption}`}  className={isActiveClass}>
            {titleOption}
        </NavLink>
    );
};

export default OptionNavbarComponent;