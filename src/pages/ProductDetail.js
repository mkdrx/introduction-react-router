import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // Stores an object with key-value pairs where the keys are the dynamic segments leading to this page
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
