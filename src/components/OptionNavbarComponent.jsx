import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../utils/Routes";



const OptionNavbarComponent = (props) => {
        const {titleOption} = props;
        const isActiveClass = ({isActive}) =>{
            return isActive ? 'active nav-link' : 'nav-link';
        };

    return (
        <NavLink to={`${routes.categoryView.replace(":category",titleOption)}`}  className={isActiveClass}>
            {titleOption}
        </NavLink>
    );
};

export default OptionNavbarComponent;