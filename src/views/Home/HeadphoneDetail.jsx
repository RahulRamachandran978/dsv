import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { headphones } from "../../utils/headphoneData";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";

const HeadphoneDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = headphones.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/dashboard/headphones")}
        className="flex items-center gap-2 mb-6 font-medium hover:text-black"
      >
        <ArrowLeft size={20} />
        Back to Headphones
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
        
        {/* IMAGE */}
        <div className="bg-gray-50 rounded-2xl p-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md mx-auto hover:scale-105 transition"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex mt-3">
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

          {/* Price */}
          <div className="mt-6">
            <span className="text-3xl font-bold">
              ₹{product.price}
            </span>
            <span className="line-through ml-3 text-gray-400">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <button className="mt-8 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneDetail;
