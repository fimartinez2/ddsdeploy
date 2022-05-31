import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import OrderDetails from "../components/OrderDetails";


const OrderCard = ({ orderId, date, orderDetail, subTotalAmount, totalAmount, cupons }) => {
    const [details, setDetails] = useState(false);

    const deleteDisplay = () => {
        setDetails(false);
    };

    return (
        <div>
            <div className="custom-card p-3">
                <h4 className="my-0">
                    Pedido #{orderId}
                </h4>
                <p className="subtitle-card mb-4">
                    Fecha pedido: {date}
                </p>
                <div className="mb-4">
                    <p className="card-details">Ver detalles</p>
                    <i onClick={() => setDetails(true)}><FaPlusCircle className="mx-2 mb-1" color="#FFC856" size={25} /></i>
                </div>
                <p className="subtotal">Subtotal: ${subTotalAmount}</p>
                <hr />
                <p className="total">TOTAL PAGADO:</p>
                <p className="total mb-0">${totalAmount}</p>
                {details ? (
                    <OrderDetails
                        orderId={orderId}
                        orderDetail={orderDetail}
                        subTotalAmount={subTotalAmount}
                        totalAmount={totalAmount}
                        cupons={cupons}
                        deleteDisplay={deleteDisplay}
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default OrderCard;