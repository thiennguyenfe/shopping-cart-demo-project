import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import FeatureCard from "../FeatureCard";

const FeaturedProduct = () => {
  const { items: products, status } = useSelector(
    (state: RootState) => state.products
  );

  const { data } = useGetAllProductsQuery(products);

  return (
    <div>
      <FeatureCard
        title="Featured Product"
        data={data}
        slide={4}
        status={status}
      />
    </div>
  );
};

export default FeaturedProduct;
