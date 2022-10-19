import DeliveryIcon from "../../icons/Delivery";
import DiscountIcon from "../../icons/Discount";
import SecureIcon from "../../icons/Secure";
import SupportIcon from "../../icons/Support";

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-wrapper">
        {listFeature?.length > 0 &&
          listFeature?.map((item, index) => {
            return (
              <div className="feature-item" key={index}>
                <span className="feature-icon">{item.icon}</span>
                <div>
                  <p className="feature-name">{item.name}</p>
                  <span className="feature-desc">{item.desc}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Feature;

const listFeature = [
  {
    id: 1,
    name: "Discount",
    desc: "Every week new sales",
    icon: <DiscountIcon />,
  },
  {
    id: 1,
    name: "Discount",
    desc: "Every week new sales",
    icon: <DeliveryIcon />,
  },
  {
    id: 1,
    name: "Discount",
    desc: "Every week new sales",
    icon: <SupportIcon />,
  },
  {
    id: 1,
    name: "Discount",
    desc: "Every week new sales",
    icon: <SecureIcon />,
  },
];
