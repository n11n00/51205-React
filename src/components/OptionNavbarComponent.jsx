import React from "react";

const OptionNavbarComponent = (props) => {
        const {titleOption} = props
    return (
        <span className="nav-link">
            {titleOption}
        </span>
    );
};

export default OptionNavbarComponent;