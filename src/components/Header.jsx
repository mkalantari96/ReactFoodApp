import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import iconImage from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNum, item) => {
    return totalNum + item.quantity;
  }, 0);

  function handleShowChart() {
    UserProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={iconImage} alt="Food order logo" />
        <h1>React Food App</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowChart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
