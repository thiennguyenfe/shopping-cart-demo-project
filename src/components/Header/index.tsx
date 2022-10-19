import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { BsArrowRight } from "react-icons/bs";
import Feature from "../Feature";

export interface IAppProps {}

export default function Header(props: IAppProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="header-container">
      <Slider {...settings}>
        {listSlider?.length > 0 &&
          listSlider?.map((item, index) => {
            return (
              <div className="slider-item" key={index}>
                <h3>1</h3>
                <div>
                  <p className="slider-label">{item.label}</p>
                  <h2 className="slider-title">{item.title}</h2>
                  <button className="slider-button">
                    {item.btn}
                    <span>
                      <BsArrowRight />
                    </span>
                  </button>
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            );
          })}
      </Slider>
      <Feature />
    </div>
  );
}

const listSlider = [
  {
    id: 1,
    label: "Welcome to chairy",
    title: "Best Furniture Collection for your interior.",
    btn: "Shop Now",
    img: "",
    discount: "50%",
  },
  {
    id: 2,
    label: "Welcome to chairy",
    title: "Best Furniture Collection for your interior.",
    btn: "Shop Now",
    img: "",
    discount: "40%",
  },
  {
    id: 3,
    label: "Welcome to chairy",
    title: "Best Furniture Collection for your interior.",
    btn: "Shop Now",
    img: "",
    discount: "30%",
  },
];
