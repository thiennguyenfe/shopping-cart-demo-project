import { Col, Rate, Row, Comment, Avatar, Tooltip } from "antd";
import React, { createElement, useState } from "react";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";

const Review = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <div className="review-container">
      <div className="review-wrapper">
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <div className="rating">
              <h3>Customer reviews</h3>
              <Rate allowHalf disabled defaultValue={4.5} />
              <span>4.5 out of 5</span>
              <p></p>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="list-review">
              <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                }
                datetime={
                  <Tooltip title="2016-11-22 11:22:33">
                    <span>8 hours ago</span>
                  </Tooltip>
                }
              />
              <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                }
                datetime={
                  <Tooltip title="2016-11-22 11:22:33">
                    <span>8 hours ago</span>
                  </Tooltip>
                }
              />
              <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                }
                datetime={
                  <Tooltip title="2016-11-22 11:22:33">
                    <span>8 hours ago</span>
                  </Tooltip>
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Review;
