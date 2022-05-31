const OrderDetails = ({ orderId, orderDetail, subTotalAmount, totalAmount, cupons, deleteDisplay }) => {
    const pricesList = Object.entries(orderDetail).map(([key, value]) => {
        return (
            <div className="modal-item" key={key}>
                <p className="modal-price">{key}</p>
                <p className="modal-price">${value}</p>
            </div>);
    });

    const cuponsList = Object.entries(cupons).map(([key, value]) => {
        return (
            <p className="modal-price-bottom" key={key}>- {key} ({value.type} {value.discount}%)</p>
        );
    })

    return (
        <>
            <div className="modal fade show detail-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i className="exit-modal" onClick={deleteDisplay}>X</i>
                        </div>
                        <div className="px-3">
                            <p className="modal-main">
                                Detalle pedido #{orderId}
                            </p>
                            <hr />
                            <div className="row">{pricesList}</div>
                            <hr className="my-1" />
                            <div className="modal-bottom">
                                <p className="fw-bold modal-price-bottom">Sub Total: ${subTotalAmount}</p>
                                <p className="modal-price-bottom">Cupones:</p>
                                <div className="row">{cuponsList}</div>
                            </div>
                            <hr className="mt-2 mb-3" />
                            <p className="total mb-3">TOTAL: ${totalAmount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetails;