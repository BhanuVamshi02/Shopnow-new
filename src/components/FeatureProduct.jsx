import { Link } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import SingleFeatureProduct from "./SingleFeatureProduct";

const FeatureProduct = () => {
  const { isLoading, products } = useProductContext();

  if (isLoading) {
    return <div>loading...</div>;
  }

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const selectedProducts = uniqueCategories
    .map((category) => {
      const productsInCategory = products.filter(
        (product) => product.category === category
      );
      return productsInCategory.length > 0 ? productsInCategory[2] : null;
    })
    .filter(Boolean); // Remove any null values (categories with no products)

  return (
    <>
      <h1
        className="text-center"
        style={{ color: "white", paddingLeft: "50px" }}
      >
        Featured Products
      </h1>

      <div
        style={{
          color: "white",
          padding: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {selectedProducts.map((val) => (
          <SingleFeatureProduct key={val.id} {...val} />
        ))}
      </div>
    </>
  );
};

export default FeatureProduct;
