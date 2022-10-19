import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CiShoppingCart } from "react-icons/ci";

interface IData {
  id: number;
  name: string;
  img: string;
  price: string;
  prevPrice: string;
}

export interface IFeatureCardProps {
  title: string;
  data: IData[];
  slide: number;
}

export default function FeatureCard(props: IFeatureCardProps) {
  const { title, data, slide } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <HiOutlineArrowLongLeft />,
    nextArrow: <HiOutlineArrowLongRight />,
  };
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <h1 className="card-title">{title}</h1>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className="card-item" key={index}>
                <img src={item.img} alt="" />
                <div className="actions"></div>
                <div className="product-info">
                  <div>
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                  </div>
                  <div className="add-to-cart">
                    <CiShoppingCart style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
