import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  return (
    <div>
      <h2> Product Listing </h2>
      <div className="product-grid">
        {Products?.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3> {product.title} </h3>
                <h3> ${product.price} </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductListing;
