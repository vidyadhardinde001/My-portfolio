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
    <div className="bg-gray-800 h-full p-6 rounded-lg shadow-md">
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
            <textarea
              readOnly
              value={selectedProduct.product_name || "Product Name"}
              className="w-full min-h-[50px] p-2 border rounded-md bg-gray-50 resize-none"
            />
          </div>

          {/* Countries Sold */}
          <div>
            <label className="block text-sm font-medium text-white">
              Countries Sold In:
            </label>
            <textarea
              readOnly
              value={selectedProduct.countries_sold || "Not Available"}
              className="w-full min-h-[50px] p-2 border rounded-md bg-gray-50 resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-white">
              Category:
            </label>
            <textarea
              readOnly
              value={selectedProduct.category || "Not Available"}
              className="w-full min-h-[50px] p-2 border rounded-md bg-gray-50 resize-none"
            />
          </div>

          {/* Threatened Species */}
          <div>
            <label className="block text-sm font-medium text-white">
              Threatened Species:
            </label>
            <textarea
              readOnly
              value={selectedProduct.threatened_species || "Not Available"}
              className="w-full min-h-[50px] p-2 border rounded-md bg-gray-50 resize-none"
            />
          </div>

          {/* Allergens */}
          <div>
            <label className="block text-sm font-medium text-white">
              Allergens:
            </label>
            <textarea
              readOnly
              value={selectedProduct.allergens || "Not Available"}
              className="w-full min-h-[50px] p-2 border rounded-md bg-gray-50 resize-none"
            />
          </div>

          {/* Packaging */}
          <div>
            <label className="block text-sm font-medium text-white">
              Packaging:
            </label>
            <textarea
              readOnly
              value={selectedProduct.packaging || "Not Available"}
              className="w-full min-h-[50px] p-2 border rounded-md bg-gray-50 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
