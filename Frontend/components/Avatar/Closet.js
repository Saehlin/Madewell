import React from "react";
import { Row, Col } from "reactstrap";
import s from "../../pages/avatar/Avatar.module.scss";

import Unlockable from "./Unlockable";

const Closet = ({ unlockables, outfit, onBuy, onWear, onUndress }) => (
  <Row xs={1} md={3}>
    {unlockables.map((unlockable) => (
      <Col className={s.imgCol} key={unlockable.id}>
        <Unlockable
          value={unlockable}
          worn={Object.values(outfit).some(value => (
            value?.id === unlockable.id &&
            value?.closet === unlockable.closet
          ))}
          onWear={() => onWear(unlockable)}
          onUndress={() => onUndress(unlockable)}
          onBuy={() => onBuy(unlockable)}
        />
      </Col>
    ))}
  </Row>
);

export default Closet;
