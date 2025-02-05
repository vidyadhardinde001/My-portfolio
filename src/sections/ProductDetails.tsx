import React from "react";

interface Props {
  selectedProduct: {
    image_url?: string;
    product_name?: string;
    countries_sold?: string;
    category?: string;
    threatened_species?: string;
    allergens?: string;
    packaging?: string;
  };
}

const ProductDetails: React.FC<Props> = ({ selectedProduct }) => {
  return (
    <div className="bg-gray-800 h-full p-6 rounded-lg shadow-md mt-3">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-800 h-[300px] rounded-lg">
          {selectedProduct.image_url ? (
            <img
              src={selectedProduct.image_url}
              alt="Product"
              className="w-full h-full object-contain rounded-lg bg-white"
            />
          ) : (
            <p className="text-gray-500">No Image</p>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-white">
              Name of Product:
            </label>
            <input
              type="text"
              readOnly
              value={selectedProduct.product_name || "Product Name"}
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>

          {/* Countries Sold */}
          <div>
            <label className="block text-sm font-medium text-white">
              Countries Sold In:
            </label>
            <input
              type="text"
              readOnly
              value={selectedProduct.countries_sold || "Country List"}
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-white">
              Category:
            </label>
            <input
              type="text"
              readOnly
              value={selectedProduct.category || "Category"}
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>

          {/* Threatened Species */}
          <div>
            <label className="block text-sm font-medium text-white">
              Threatened Species:
            </label>
            <input
              type="text"
              readOnly
              value={selectedProduct.threatened_species || "Species Info"}
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>

          {/* Allergens */}
          <div>
            <label className="block text-sm font-medium text-white">
              Allergens:
            </label>
            <input
              type="text"
              readOnly
              value={selectedProduct.allergens || "Allergen Info"}
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>

          {/* Packaging */}
          <div>
            <label className="block text-sm font-medium text-white">
              Packaging:
            </label>
            <input
              type="text"
              readOnly
              value={selectedProduct.packaging || "Packaging Info"}
              className="w-full mt-1 p-2 border rounded-md bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
