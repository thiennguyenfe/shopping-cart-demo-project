import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store";
import { useGetAllProductsQuery } from "../../redux/api/productAPI";
import FeatureCard from "../FeatureCard";

const FeaturedProduct = () => {
  const { items: products, status } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery(products);

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
