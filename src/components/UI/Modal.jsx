import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", onClose }) {
  const dailog = useRef();
  useEffect(() => {
    const modal = dailog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dailog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
