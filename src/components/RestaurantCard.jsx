const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    areaName,
    totalRatingsString,
    sla,
    aggregatedDiscountInfoV3,
  } = resData;

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative h-52 overflow-hidden">

        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png"
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {aggregatedDiscountInfoV3 && (
          <div
            className="
              absolute
              bottom-3
              left-3
              rounded-lg
              bg-black/75
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur
            "
          >
            {aggregatedDiscountInfoV3.header}
          </div>
        )}

      </div>

      {/* ================= DETAILS ================= */}

      <div className="space-y-4 p-5">

        {/* Restaurant Name */}

        <h2 className="truncate text-lg font-semibold text-gray-900">
          {name}
        </h2>

        {/* Rating + Delivery */}

        <div className="flex items-center gap-3 text-sm font-medium text-gray-700">

          <span className="flex items-center gap-1">
            ⭐ {avgRating}
          </span>

          <span className="text-gray-300">•</span>

          <span>{sla.slaString}</span>

        </div>

        {/* Cuisine */}

        <p className="truncate text-sm text-gray-500">
          {cuisines.join(" • ")}
        </p>

        {/* Location */}

        <p className="truncate text-sm text-gray-500">
          {locality}, {areaName}
        </p>

        {/* Bottom Row */}

        <div className="flex items-center justify-between pt-2">

          <span className="text-base font-semibold text-gray-900">
            {costForTwo}
          </span>

          <span className="text-sm text-gray-500">
            {totalRatingsString}
          </span>

        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;