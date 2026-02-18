import React from 'react'
import { useCart } from '../../context/CartContext'
import { Trash2 } from 'lucide-react';

const Cart = () => {

    const {cart , dispatch} = useCart();
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

  // EMPTY CART UI
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">
          Your Cart is Empty 🛒
        </h1>
        <p className="text-gray-500">
          Looks like you haven't added anything yet.
        </p>
      </div>
    );
  }

  return (
     <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT — PRODUCTS */}
        <div className="lg:col-span-2 space-y-6">

          {cart.map(item => (

            <div
              key={item.id}
              className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain"
              />

              {/* DETAILS */}
              <div className="flex-1">

                <h2 className="font-bold text-lg">
                  {item.name}
                </h2>

                <p className="text-gray-500">
                  ₹{item.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QTY",
                        payload: item.id,
                      })
                    }
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.qty}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QTY",
                        payload: item.id,
                      })
                    }
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* REMOVE */}
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.id,
                  })
                }
                className="text-red-500 hover:scale-110 transition"
              >
                <Trash2 />
              </button>

            </div>
          ))}
        </div>

        {/* RIGHT — SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">

          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:scale-105 transition">
            Checkout
          </button>

        </div>
      </div>
    </div>
  )
}

export default Cart
