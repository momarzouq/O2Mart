import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function QuantityItem({ item, increment, decrement, removeItem }) {
  return (
    <div className="flex items-center border rounded overflow-hidden w-max">
      <button
        onClick={() =>
          item.quantity === 1 ? removeItem(item.id) : decrement(item.id)
        }
        className="px-3 py-1 hover:text-Brand"
      >
        {item.quantity === 1 ? <RiDeleteBin6Line /> : "-"}
      </button>
      <span className="px-4 py-1">{item.quantity}</span>
      <button
        onClick={() => increment(item.id)}
        className="px-3 py-1 hover:text-Brand"
      >
        +
      </button>
    </div>
  );
}
