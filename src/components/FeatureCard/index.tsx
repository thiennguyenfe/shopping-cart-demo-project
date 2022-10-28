import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/slice/cartSlice";
import Link from "next/link";
import { Card } from "antd";
import { useEffect, useState } from "react";

interface IProduct {
  id: number;
  name: string;
  image: string;
  price: string;
  prevPrice: string;
}

export interface IFeatureCardProps {
  title: string;
  data: IProduct[];
  slide: number;
  status: string;
}

export default function FeatureCard(props: IFeatureCardProps) {
  const { title, data, slide, status } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "success") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, []);

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
    slidesToShow: slide,
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

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card-container">
      <div className="card-wrapper">
        <h1 className="card-title">{title}</h1>

        <Slider {...settings}>
          {data?.map((item, index) => {
            return (
              <Link href={`/product/${item.id}`}>
                <Card className="card-item" key={index} loading={loading}>
                  <img src={item.image} alt="" />
                  <div className="actions"></div>
                  <div className="product-info">
                    <div>
                      <h2>{item.name}</h2>
                      <span>${item.price}</span>
                    </div>
                    <div className="add-to-cart">
                      <button onClick={() => handleAddToCart(item)}>
                        <CiShoppingCart style={{ fontSize: "20px" }} />
                      </button>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
