import React from "react";
import OptionNavbarComponent  from "./OptionNavbarComponent";

const ListOptionNavbarComponent = (props) => {
    const {nameOption} = props;

    return (
        <div className="navbar-nav">
            {nameOption.map((Item,index) => {
                return  <OptionNavbarComponent key={index} titleOption={Item} />;
            })}
        </div>
    );
};

export default ListOptionNavbarComponent;