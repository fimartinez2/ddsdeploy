import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const userToken = useSelector((state) => state.userToken);

  const navigate = useNavigate();
  const goHome = () => {
    if (userToken) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <Logo size="60" color="white" onClick={goHome} />
        <div className="d-flex">
          <BsCart2 className="mx-3 nav-item" size={45} />
          <IoPersonOutline className="me-3 nav-item" size={45} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
