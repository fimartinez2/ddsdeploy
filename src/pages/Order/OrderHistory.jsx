import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderCard from "../../components/OrderCard";
import { getOrders } from "../../requests/orderRequest";

const OrderHistory = () => {
  const [userTokenType, userToken] = useSelector((state) => {
    return [state.userTokenType, state.userToken];
  });

  const [orderData, setOrderData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getOrders(userTokenType, userToken)
      .then((order) => {
        setOrderData(order);
        setLoading(false);
      })
      .catch(() =>
        alert(() => {
          "Ha ocurrido un error";
          setLoading(false);
        })
      );
  }, [userTokenType, userToken]);

  const orderList = orderData
    ? orderData.map((order) => {
        return (
          <div className="col-2 mx-5 my-4" key={order.orderId}>
            <OrderCard
              orderId={order.orderId}
              date={order.date}
              orderDetail={order.orderDetail}
              subTotalAmount={order.subTotalAmount}
              totalAmount={order.totalAmount}
              cupons={order.cupons}
            />
          </div>
        );
      })
    : null;

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <>
          <h2>Historial de compras</h2>
          <div className="row my-3">{orderList}</div>
        </>
      )}
    </div>
  );
};

export default OrderHistory;
