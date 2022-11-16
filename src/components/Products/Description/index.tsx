import { Col, Row } from "antd";
import React from "react";

const Description = () => {
  return (
    <div className="description-container">
      <div className="description-wrapper">
        <div>
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart.
          </p>
          <p>
            Spluttered narrowly yikes left moth in yikes bowed this that grizzly
            much hello on spoon-fed that alas rethought much decently richly and
            wow against the frequent fluidly at formidable acceptably flapped
            besides and much circa far over the bucolically hey precarious
            goldfinch mastodon goodness gnashed a jellyfish and one however
            because.
          </p>
          <Row>
            <Col flex={0.5}>
              <ul className="title">
                {list.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </Col>
            <Col flex={3}>
              <ul className="description">
                {list.map((item, index) => {
                  return <li key={index}>{item.description}</li>;
                })}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Description;

const list = [
  { name: "Type Of Packing", description: "Bottle" },
  { name: "Color", description: "Green, Pink, Powder Blue, Purple" },
  { name: "Quantity Per Case", description: "100ml" },
  { name: "Ethyl Alcohol", description: "70%" },
  { name: "Piece In One", description: "Carton" },
];
