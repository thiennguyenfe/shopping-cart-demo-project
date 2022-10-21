import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import DoubleQuoteIcon from "../../icons/DoubleQuote";

const Feedback = () => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="feedback-container">
      <div className="feedback-wrapper">
        <h1 className="feedback-title">What client says about us</h1>
        <Slider {...settings}>
          {listFeedback.map((item, index) => {
            return (
              <div className="feedback-item" key={index}>
                <div className="feedback-desc">
                  <p>{item.feedback}</p>{" "}
                </div>
                <div className="feedback-info">
                  <div className="feedback-user">
                    <div className="user-img">
                      <img src={item.avatar} alt="" />
                    </div>
                    <div className="user-info">
                      <h2>{item.name}</h2>
                      <span>{item.career}</span>
                    </div>
                  </div>
                  <div className="feedback-quote">
                    <DoubleQuoteIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;

const listFeedback = [
  {
    id: 1,
    name: "Kristin Watson",
    career: "Fashion Designer",
    avatar:
      "https://s3-alpha-sig.figma.com/img/ed1c/c80b/6c95f55d53f843caf4439599d3582836?Expires=1667174400&Signature=MVmKJh6lnDr2HvfM5ZLeAtW6scZ--DatvX0q5Fo1TbUYfXcrCu2msKgwK7W1WK9-4cbsUeHulRWcCptZ2xdS-5bm0lcb6H3ko9U8baRoPagQElqHrLOUAG0Jx9EHDb3avqZpDMVroi~NutftovdZk7mdHwL1sx9dSFEvTjb55qLZvzA5veCcBBQTLUhKFUNsqjwgdtdedX8M10dusPVdOajrwuJvgn78qStOuA6bigXh2sNh7JiNJsEAiNojwP8uY3dHcITj1-CpuVP09Igq3JGVwWFuOPU88riBqujm10I5ZmrI7eXbjs3XBYMW8GEUClBGSFDzsvHImW5NWjBAXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
  },
  {
    id: 2,
    name: "Esther Howard",
    career: "Fashion Designer",
    avatar:
      "https://s3-alpha-sig.figma.com/img/ed85/c1bf/c92ef925a398d16787cdb6fe029f0218?Expires=1667174400&Signature=hiyvQsMnzEZs4PHlCP9jyC7eVSyjYRg8UUxNcnfBGImHo0tizqi-4X0jxgUrejfaF8axzwdZfq2rOLQhRYPL7DfbeX7rIizP6qsH1QQJzbsAb9jBw6Gv7VDzb00Sgln8O5DYI5jctFdrfb2jlIAtEfI~gaXvNnPi3cYEIvME6b931S5NGjbUbPDOfuwSEt86Lxrm29iIjVNi~wbKAlPaHEceE2RTaZ6ko~HXRQtrvq73O0qofu7sMae12WAZIFKiLIO7K07IMjfDP9GmFTKj8TDSZS-bRgbJ70Uxs60bH-yzoZMdmSkfU7MFsr0UH0-woh8aAo88B93TsqCwM9sobQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
  },
  {
    id: 3,
    name: "Kristin Watson",
    career: "Fashion Designer",
    avatar:
      "https://s3-alpha-sig.figma.com/img/ed1c/c80b/6c95f55d53f843caf4439599d3582836?Expires=1667174400&Signature=MVmKJh6lnDr2HvfM5ZLeAtW6scZ--DatvX0q5Fo1TbUYfXcrCu2msKgwK7W1WK9-4cbsUeHulRWcCptZ2xdS-5bm0lcb6H3ko9U8baRoPagQElqHrLOUAG0Jx9EHDb3avqZpDMVroi~NutftovdZk7mdHwL1sx9dSFEvTjb55qLZvzA5veCcBBQTLUhKFUNsqjwgdtdedX8M10dusPVdOajrwuJvgn78qStOuA6bigXh2sNh7JiNJsEAiNojwP8uY3dHcITj1-CpuVP09Igq3JGVwWFuOPU88riBqujm10I5ZmrI7eXbjs3XBYMW8GEUClBGSFDzsvHImW5NWjBAXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
  },
  {
    id: 4,
    name: "Esther Howard",
    career: "Fashion Designer",
    avatar:
      "https://s3-alpha-sig.figma.com/img/ed85/c1bf/c92ef925a398d16787cdb6fe029f0218?Expires=1667174400&Signature=hiyvQsMnzEZs4PHlCP9jyC7eVSyjYRg8UUxNcnfBGImHo0tizqi-4X0jxgUrejfaF8axzwdZfq2rOLQhRYPL7DfbeX7rIizP6qsH1QQJzbsAb9jBw6Gv7VDzb00Sgln8O5DYI5jctFdrfb2jlIAtEfI~gaXvNnPi3cYEIvME6b931S5NGjbUbPDOfuwSEt86Lxrm29iIjVNi~wbKAlPaHEceE2RTaZ6ko~HXRQtrvq73O0qofu7sMae12WAZIFKiLIO7K07IMjfDP9GmFTKj8TDSZS-bRgbJ70Uxs60bH-yzoZMdmSkfU7MFsr0UH0-woh8aAo88B93TsqCwM9sobQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
  },
];
