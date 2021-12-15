import React from "react";
import { Row } from "reactstrap";
import s from "../../pages/avatar/Avatar.module.scss";
import { Button, Card } from "react-bootstrap";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Unlockable = ({ value, worn, onWear, onUndress, onBuy }) => (
  <Card className={s.imgCard}>
    <Card.Img variant="top" src={value.image} className={s.img} />
    <Card.Body>
      <Card.Text>
        {value.price} Carrots
        <FontAwesomeIcon
          icon={value.unlocked ? faLockOpen : faLock}
          style={{ marginLeft: 10, width: 13 }} />
      </Card.Text>
      <Row style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        
        <Button
          variant = {value.unlocked ? "link" : "light"}
          size="sm"
          style={{ width: '50%', paddingRight: 32, paddingLeft: 32}}
          onClick={onBuy}
          // @ts-ignore
          disabled = {value.unlocked}
          >
          Buy
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          style={{ width: '50%', paddingRight: 32, paddingLeft: 32 }}
          onClick={() => (
            worn
              ? onUndress()
              : onWear()
          )}>
          {worn ? 'Undress' : 'Wear'}
        </Button>
      </Row>
    </Card.Body>
  </Card>
);

export default Unlockable;
