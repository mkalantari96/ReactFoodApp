import { currencyFormatter } from "../util/formatting.jsx";

export default function CartItem({ item, onPlus, onMin }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onMin}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onPlus}>+</button>
      </p>
    </li>
  );
}
