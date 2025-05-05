import React from "react";
import CompareImg from "../assets/Tyers.svg";
const products = [
  {
    title: "Bridgestone 202/2022 123 1233",
    compare: "AED 567.55",
    discount: "Set of 4 : AED 2270.52",
    price: "AED 567.55",
    rating: 5,
    feedback: "50.600",
    image: CompareImg,
  },
  {
    title: "Bridgestone 202/2022 123 1233",
    compare: "AED 567.55",
    discount: "Set of 4 : AED 2270.52",
    price: "AED 567.55",
    rating: 5,
    feedback: "50.600",
    image: CompareImg,
  },
  {
    title: "Bridgestone 202/2022 123 1233",
    compare: "AED 567.55",
    discount: "Set of 4 : AED 2270.52",
    price: "AED 567.55",
    rating: 5,
    feedback: "50.600",
    image: CompareImg,
  },
];

const ProductsComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-bold mt-4 mb-8">Compare Products</h3>
      <table className="min-w-full border border-gray-300 text-center">
        <tbody>
          <tr>
            <td className="max-w-48 border px-4 py-2">
              Go to product page for more products
              <span>View More</span>
            </td>
            {products.map((p, index) => (
              <td key={index} className="border px-4 py-2">
                <div className="flex flex-col items-center pt-4 pb-2 space-y-2">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-28 h-28 object-contain"
                  />
                  <span className="text-sm font-medium">{p.title}</span>
                  <span className="text-sm">{p.compare}</span>
                  <span className="text-sm">{p.discount}</span>
                  <div className="relative">
                    <select className="absolute border outline-none rounded-2xl py-0.5 md:py-0 px-4">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <button className=" text-sm text-gray-500 border border-Brand rounded-2xl py-1 md:py-0.5 px-16 xl:px-10">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2">Customer Feedback</td>
            {products.map((p, index) => (
              <td key={index} className="border px-4 py-2">
                <div className="flex items-center justify-center">
                  {"★".repeat(p.rating)}
                  <span className="ml-1 text-xs text-gray-500">
                    ({p.feedback})
                  </span>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2">Price</td>
            {products.map((p, index) => (
              <td key={index} className="border px-4 py-2">
                {p.price}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsComparisonTable;
