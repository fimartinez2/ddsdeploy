const CuponCard = ({ cuponId, type, discount, orderId }) => {

    return (
      <div className="custom-card p-3">
        <h4 className="my-0">
          {cuponId}
        </h4>
        <p className="subtitle-card mb-4">
          {type}
        </p>
        <p className="subtotal">Descuento: {discount}%</p>
        <hr />
        <p className="total-cupon">Cupon Aplicado en</p>
        <p className="total-cupon mb-0">Pedido #{orderId}</p>
      </div>
    );
  }
  
  export default CuponCard;