import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../../../store";
import { useGetAllCategoryQuery } from "../../redux/api/categoryApi";

interface ICategory {
  id: number;
  name: string;
  img: string;
  quantity: number;
}

const TopCategories = () => {
  const { items: categories, status } = useSelector(
    (state: RootState) => state.category
  );
  console.log(status);
  // console.log("category", category);

  const { data, error, isLoading } = useGetAllCategoryQuery(categories);
  console.log("category", data);

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <span className="arrow-left">
          <BsArrowLeft style={{ fontSize: "18px" }} />
        </span>
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <span className="arrow-right">
          <BsArrowRight style={{ fontSize: "18px" }} />
        </span>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="category-container">
      <div className="category-wrapper">
        <h1 className="category-title">Top Categories</h1>
        {status === "success" ? (
          <Slider {...settings}>
            {categories?.map((item, index) => {
              return (
                <div className="category-item" key={index}>
                  <img src={item.img} alt="" />
                  <div className="product-info">
                    <div>
                      <h2>{item.name}</h2>
                      <span>{item.quantity} Products</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occured...</p>
        )}
      </div>
    </div>
  );
};

export default TopCategories;
