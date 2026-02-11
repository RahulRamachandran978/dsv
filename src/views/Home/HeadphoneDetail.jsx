import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { headphones } from "../../utils/headphoneData";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Check,
} from "lucide-react";

const HeadphoneDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = headphones.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="min-h-screen bg-white">

      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <button
          onClick={() => navigate("/dashboard/headphones")}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Headphones
        </button>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 py-12">

        {/* LEFT – IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-xl object-contain"
          />
        </div>

        {/* RIGHT – DETAILS */}
        <div className="space-y-6">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-blue-600 font-medium">
              4.2 (344 reviews)
            </span>
          </div>

          {/* KEY FEATURES */}
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-green-600" size={16} />
              Adaptive Noise Cancelling with Smart Ambient
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-600" size={16} />
              Bluetooth 5.3 with LE Audio
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-600" size={16} />
              JBL Pure Bass Sound
            </li>
          </ul>

          {/* COLOR OPTIONS */}
          {/* <div>
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Color
            </p>
            <div className="flex gap-3">
              <span className="w-8 h-8 bg-black rounded border cursor-pointer"></span>
              <span className="w-8 h-8 bg-blue-600 rounded border cursor-pointer"></span>
              <span className="w-8 h-8 bg-white border rounded cursor-pointer"></span>
            </div>
          </div> */}

          {/* PRICE */}
          <div>
            <p className="text-3xl font-extrabold text-red-600">
              ₹{product.price}
            </p>
            <p className="text-sm text-gray-500">
              M.R.P:{" "}
              <span className="line-through">
                ₹{product.oldPrice}
              </span>{" "}
              <span className="text-red-600 font-semibold ml-2">
                SAVE ₹4,000
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Inclusive of all taxes
            </p>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <button className="px-3 py-1 border rounded">-</button>
            <span className="font-medium">1</span>
            <button className="px-3 py-1 border rounded">+</button>
          </div>

          {/* ADD TO CART */}
          <button className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded font-semibold transition shadow-md">
            <ShoppingCart size={20} />
            Add to Cart
          </button>

          {/* DELIVERY INFO */}
          <p className="text-green-600 text-sm font-medium">
            In Stock | Fast & Free Delivery (2–4 Days)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneDetail;
