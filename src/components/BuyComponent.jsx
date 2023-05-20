import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";

const collectionOrders = "orders";

const BuyComponent = () => {
    const { cart, clearCart } = useContext(GeneralContext);
    const navigate = useNavigate();

    const _totalCompra = useMemo(() => {
        return cart.reduce((partialSum, item) => partialSum + item.price, 0);
    }, [cart]);

    const _order = useMemo(() => {
        const items = cart.map((item) => ({item, amount:1}));
        const date = new Date().toLocaleDateString("es-AR");
        return { items, date };
    },[cart]);

    const actionBuy = () => {
        const db = getFirestore();
        const orderCollection = collection(db, collectionOrders);
        addDoc(orderCollection, _order).then(({ id })=> {
            alert(`Orden de compra creado folio: ${id}`);
            clearCart();
            navigate("/");
        });
    };

    return(
        <>
            <div className="row">
                <div className="col -10"></div>
                    <div className="col-2">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>Resumen de la venta</td>
                                </tr>
                                <tr>
                                    <td className="h5">Articulos:</td>
                                    <td className="h5"> {" "+cart.length+" "} PZAS</td>
                                </tr>
                                <tr>
                                    <td className="h5">Total: </td>
                                    <td className="h5">${_totalCompra}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button disabled={cart.lenght === 0} onClick={actionBuy} className="btn btn-outline-danger btn-sm">
                                            Comprar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
            </div>
        </>
    )


}
 export default BuyComponent;