import React from "react";
import { earbuds } from "../../utils/earbudData";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EarBuds = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <h1 className="text-3xl font-bold mb-8">
        Earbuds
      </h1>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {earbuds.map((product) => (
          <div
            key={product.id}
            onClick={() =>
              navigate(`/dashboard/earbuds/${product.id}`)
            }
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group overflow-hidden"
          >

            {/* IMAGE */}
            <div className="bg-gray-50 p-8 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-52 object-contain group-hover:scale-110 transition"
              />
            </div>

            {/* DETAILS */}
            <div className="p-6">
              <h2 className="font-bold text-lg">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Price */}
              <div className="mt-3">
                <span className="text-xl font-bold">
                  ₹{product.price}
                </span>
                <span className="line-through ml-2 text-gray-400">
                  ₹{product.oldPrice}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default EarBuds;
