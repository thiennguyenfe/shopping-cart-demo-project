import MenuSection from "./Menu";
import Middlesection from "./MiddleSection";
import TopSection from "./TopSection";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <TopSection />
      <Middlesection />
      <MenuSection />
    </div>
  );
};

export default Navigation;
