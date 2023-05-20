import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
import Swal from 'sweetalert2';


const nameCollection = "Items"

const DetailProductsView = (props) => {
    const {Atras} = props
    const { idProduct:documentId } = useParams();
    const {addToCart,cart} = useContext(GeneralContext);
    const [data] = useFirestore ({nameCollection,documentId });
    const [amount, setAmount] = useState(1);
    const {title, image, description, price, category} = data;


    const alertaProductoAgregado = () => {
        Swal.fire({
          position: 'middle',
          icon: 'success',
          title: 'Se agrego el producto al carrito!',
          showConfirmButton: false,
          timer: 2000
        })
      }


    const addBtnAction = () => {
        addToCart(data);
        console.log(cart);
        alertaProductoAgregado()
    };




    return (
        <>
        <div className="row my-5">
            <div className="col-3 offset-md-3">
                <NavLink to={`/`}>
                <button className="btn btn-outline-primary btn-sm">Atras</button>
                </NavLink>
                <h2 className="text-danger">Oferta por tiempo limitado !!!</h2>
            </div>
            <div className="col-4">
                <h3>
                    Categoria: <span className="text-info">{category}</span>
                </h3>
            </div>
        </div>
        <div className="row">
            <div className="col-6 offset-md-3">
                <div className="card mb-3 shadow-sm py-2 px-6">
                    <div className="row">
                        <div className="col-md-4">
                            <img width={315} height={524} src={image} alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text">
                                    <small className="text-muted">${price}</small>
                                </p>
                                <button onClick={addBtnAction} className="btn btn-outline-danger btn-sm">Comprar
                                </button>
                                <p className="h6 my-5">
                                    <span> Cantidad: </span>
                                    {amount}{" "}
                                    <div className="btn-group">
                                         <button onClick={() => setAmount(amount + 1)} className="btn btn-outline-secondary btn-sm">
                                             +
                                        </button>
                                        <button
                                        disabled={amount === 1}
                                        onClick={() => setAmount(amount - 1)}
                                        className="btn btn-outline-secondary btn-sm">
                                             -
                                    </button>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
};

export default DetailProductsView;