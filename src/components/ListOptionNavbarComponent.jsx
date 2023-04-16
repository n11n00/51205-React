import React from "react";
import OptionNavbarComponent  from "./OptionNavbarComponent";

const ListOptionNavbarComponent = (props) => {
    const {nameOption} = props;

    return (
        <div className="navbar-nav">
            {nameOption.map((nameItem,index) => {
                return <OptionNavbarComponent key={index} titleOption={nameItem} />;
            })}
        </div>
    );
};

export default ListOptionNavbarComponent;