import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CuponCard from "../../components/CuponCard";
import { getCupons } from "../../requests/cuponRequest";


const Cupons = () => {
  const [userTokenType, userToken] = useSelector((state) => {
    return [state.userTokenType, state.userToken]
  });

  const [cuponData, setCuponData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCupons(userTokenType, userToken).then((cupons) => {
      setCuponData(cupons);
      setLoading(false);
    })
      .catch(() => alert(() => {
        'Ha ocurrido un error';
        setLoading(false);
      }));
  }, [userTokenType, userToken]);

  const cuponList = cuponData ? Object.entries(cuponData).map(([key, value]) => {
    return (
      <div className="col-2 mx-5 my-4" key={key}>
        <CuponCard
          cuponId={key}
          type={value.type}
          discount={value.discount}
          orderId={value.orderId}
        />
      </div>
    );
  }) : null;

  return (
    <div>
      {isLoading ? <div className="loading">Loading&#8230;</div> : (
        <>
          <div className="below-navbar">
            <h2>Cupones Aplicados</h2>
          </div>
          <div className="row my-3">{cuponList}</div>
        </>)}
    </div>
  );
};

export default Cupons;