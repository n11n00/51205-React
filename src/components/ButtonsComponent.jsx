
import { NavLink } from "react-router-dom";
const ButtonsComponent = ({showDelete,showInfo,removeThisItem,idProduct}) => {
  return (
    <>
      {showDelete ? (
        <button className="btn btn-danger btn-sm" onClick={removeThisItem}>
          x
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/products/detail/${idProduct}`}>
          <button className="btn btn-outline-info btn-sm">+ info</button>
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonsComponent;