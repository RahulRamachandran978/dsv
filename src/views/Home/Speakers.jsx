import React from "react";
import { speakers } from "../../utils/speakerData";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const Speakers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <h1 className="text-3xl font-bold mb-8">
        Speakers
      </h1>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            onClick={() => navigate(`/dashboard/speakers/${speaker.id}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group"
          >
            
            {/* IMAGE */}
            <div className="bg-gray-50 p-8 rounded-t-2xl">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-56 mx-auto object-contain group-hover:scale-110 transition"
              />
            </div>

            {/* DETAILS */}
            <div className="p-5">
              <h2 className="font-semibold text-lg">
                {speaker.name}
              </h2>

              {/* Rating */}
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < speaker.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Price */}
              <div className="mt-3">
                <span className="text-xl font-bold">
                  ₹{speaker.price}
                </span>
                <span className="line-through text-gray-400 ml-2">
                  ₹{speaker.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
