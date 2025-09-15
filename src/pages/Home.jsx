import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Latest Products</h1>
      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-md-4 col-lg-3 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}