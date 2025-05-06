## React + Vite npm run dev

## React Router react-router-dom

## Icons Library react-icons

## Swiper Library npm i swiper

## npm install react-data-table-component







  {/* New Products Section - Shown when cart is empty */}
      {cartItems.length === 0 && (
        <div className="flex-[3] bg-white p-6 rounded-md">
          <div className="grid-custom-cart gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col items-center justify-center border p-4 space-y-2"
              >
                {/* Brand Of Product & Add To Favorit & Comprison */}
                <div className="flex items-center">
                  <img
                    src={product.brand}
                    alt={product.brand}
                    className="absolute left-4 top-2 object-cover rounded h-12"
                  />
                  <IoHeartOutline className="absolute right-4 top-2 size-6 hover:text-Brand" />
                  <Link to="/comparsion">
                    <MdOutlineCompareArrows className="absolute right-11 top-2 size-6 hover:text-Brand" />
                  </Link>
                </div>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover rounded h-20 my-6 flex justify-center"
                  />
                </Link>
                <img
                  src={product.volume}
                  alt={product.name}
                  className="object-cover"
                />
                <h3 className="mt-2 font-semibold w-48 text-center">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(product.rating)}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="line-through text-sm text-gray-400">
                      AED {product.originalPrice}
                    </span>
                  )}
                  <span className="font-semibold">
                    <span className="text-gray-400">AED</span> {product.price}
                  </span>
                </div>

                <div className="relative">
                  <select className="absolute border outline-none rounded-2xl py-[2px] md:py-0 px-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <button
                    onClick={handleClick}
                    className={`text-sm text-gray-500 border border-Brand rounded-2xl py-1 md:py-0.5 px-20 xl:px-10 transition-colors duration-300 ${
                      isAdded ? "bg-Brand text-white" : ""
                    }`}
                  >
                    {isAdded ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}