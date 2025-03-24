import { ArrowRight, Check } from "lucide-react";
import React from "react";
import { Skip } from "../../api/skipApi";
import SkipBadge from "./SkipBadge";

type Props = {
  skip: Skip;
  isSelected: Boolean;
  handleSelectedSkip: (skip: Skip) => void;
};
//
const SkipCard: React.FC<Props> = ({
  skip,
  isSelected,
  handleSelectedSkip,
}) => {
  return (
    <div
      onClick={() => skip.allows_heavy_waste && handleSelectedSkip(skip)}
      className={`bg-neutral-800 rounded-lg p-6 capitalize border-1 ${
        isSelected
          ? "border-blue-800"
          : "border-neutral-900 hover:border-blue-700"
      }
            ${
              !skip.allows_heavy_waste
                ? "opacity-50 cursor-not-allowed hover:border-neutral-900"
                : "cursor-pointer "
            }
            `}
    >
      <div className="relative">
        <div
          className={`${
            isSelected ? "inline-block" : "hidden"
          } bg-blue-700  p-1 rounded-full absolute right-2 top-2`}
        >
          <Check />
        </div>
        <img
          // className="h-2 w-full"
          src={skip.image}
          alt=""
        />
      </div>
      <div className="border-b pb-5">
        <div className="my-4 flex flex-row justify-between items-start gap-1">
          <h1 className="text-xl font-bold">{skip?.size} yard skip </h1>
          <div>
            <p className="text-xs text-gray-500">Hire Period</p>
            <h2 className="text-sm ">
              {skip.hire_period_days} day hire period
            </h2>
          </div>
        </div>
        {/* do's and dont */}
        <div className="flex flex-wrap gap-2">
          {skip.allowed_on_road && <SkipBadge title="Allowed on road" />}

          {!skip.allows_heavy_waste && (
            <SkipBadge title="Not Suitable for heavy waste" notAvailable />
          )}
        </div>
        <div></div>
      </div>
      {/* pricing */}
      <div>
        <h2 className=" text-gray-500 border-b py-2">Details</h2>
        <div className="px-2">
          <div className="text-sm text-gray-500 flex justify-between border-b py-2 ">
            <h1>Post code</h1>
            <h1>{skip.postcode}</h1>
          </div>
        </div>
        <div className="px-2">
          <div className="text-sm text-gray-500 flex justify-between border-b py-2 ">
            <h1>Price</h1>
            <h1>£ {skip.price_before_vat}</h1>
          </div>
        </div>
        <div className="px-2">
          <div className="text-sm text-gray-500 flex justify-between border-b py-2 ">
            <h1>VAT</h1>
            <h1>£ {skip.vat}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-sm text-gray-500">Total Price</h1>
        <div className="my-4 flex flex-col items-end gap-1">
          <span className="text-xl font-bold text-blue-700">
            £{" "}
            {Math.floor(
              skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100
            )}
          </span>
          <span className="text-sm text-gray-500">per week</span>
        </div>
      </div>
      <button
        className={`capitalize text-base  ${
          isSelected ? "bg-blue-700" : "bg-neutral-900"
        } rounded-lg w-full py-3 flex justify-center items-center gap-2`}
      >
        {isSelected ? "Selected" : "Select this skip"}
        {!isSelected && <ArrowRight />}
      </button>
    </div>
  );
};

export default SkipCard;
