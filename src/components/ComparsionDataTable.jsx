import { useState } from "react";
import CompareImg from "../assets/Tyers.svg";
import Nissan from "../assets/nissan.svg";
import Close from "../assets/close.svg";
import { Link } from "react-router-dom";
import { useToastStore } from "../store/useToastStore";

const initialProducts = [
  {
    title: "Bridgestone 202/2022 123 1233",
    compare: "AED 567.55",
    discount: "Set of 4 : AED 2270.52",
    price: "AED 567.55",
    rating: 5,
    feedback: "50.600",
    image: CompareImg,
    Brand: Nissan,
  },
  {
    title: "Bridgestone 202/2022 123 1233",
    compare: "AED 567.55",
    discount: "Set of 4 : AED 2270.52",
    price: "AED 567.55",
    rating: 5,
    feedback: "50.600",
    image: CompareImg,
    Brand: Nissan,
  },
  {
    title: "Bridgestone 202/2022 123 1233",
    compare: "AED 567.55",
    discount: "Set of 4 : AED 2270.52",
    price: "AED 567.55",
    rating: 5,
    feedback: "50.600",
    image: CompareImg,
    Brand: Nissan,
  },
];
const ProductsComparisonTable = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { showToast } = useToastStore();

  const handleAddToCart = (index) => {
    setSelectedIndex(index);
    showToast(`Item ${index + 1} added to cart`);
  };

  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    if (updatedProducts.length === 0) {
      showToast("Comparison is empty");
    }
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-bold mt-4 mb-8">Compare Products</h3>
      {products.length === 0 ? (
        <div className="text-center text-lg font-medium text-gray-500 py-10">
          Comparison is empty.
        </div>
      ) : (
        <table className="border border-gray-300 text-center">
          <tbody>
            <tr className="odd:bg-white even:bg-gray-100 ">
              <td className="w-96 border px-4 py-2 text-start font-medium space-y-4">
                <p className="text-xl">Go to product page for more products</p>
                <Link
                  to="/auto-parts"
                  className="text-lg block underline whitespace-nowrap"
                >
                  View More
                </Link>
              </td>
              {products.map((p, index) => (
                <td
                  key={index}
                  className="relative w-96 border px-4 py-2 group"
                >
                  <div className="flex flex-col items-center pt-4 pb-2 space-y-2">
                    <img
                      src={p.Brand}
                      className="absolute left-4 top-4 w-10 h-10 object-contain"
                    />
                    <img
                      src={Close}
                      onClick={() => removeProduct(index)}
                      className="absolute right-4 top-4 w-6 h-6 object-contain cursor-pointer"
                      alt="Delete"
                    />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-36 h-36 object-contain"
                    />
                    <span className="text-gray-500 text-sm font-medium">
                      {p.title}
                    </span>
                    <span className="text-gray-500 text-sm">{p.compare}</span>
                    <span className="text-gray-500 text-sm">{p.discount}</span>
                    <div className="relative">
                      <select className="absolute border outline-none rounded-2xl py-0.5 md:py-0 px-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <button
                        onClick={() => handleAddToCart(index)}
                        className={`text-sm font-medium border rounded-2xl py-1 md:py-0.5 px-16 xl:px-10 ${
                          selectedIndex === index
                            ? "bg-[#D9D9D9] border-transparent"
                            : "border-Brand"
                        }`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            <tr className="odd:bg-white even:bg-gray-100">
              <td className="font-medium border text-sm text-gray-500 px-4 py-3">
                Customer Feedback
              </td>
              {products.map((p, index) => (
                <td key={index} className="border px-6 py-3">
                  <div className="flex items-center justify-start text-Brand">
                    <span className="text-Brand text-2xl mr-1">
                      {"★".repeat(p.rating)}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm">
                      ({p.feedback})
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-100">
                <td className="text-gray-500 text-sm border px-4 py-[18px] font-medium">
                  Customer feedback
                </td>
                {products.map((p, index) => (
                  <td
                    key={index}
                    className="text-start text-gray-500 text-sm border px-6 py-2"
                  >
                    {p.price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsComparisonTable;
