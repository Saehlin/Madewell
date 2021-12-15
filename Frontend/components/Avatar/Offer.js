import React from "react";
import { Button, Modal, Image } from "react-bootstrap";
import s from "../../pages/avatar/Avatar.module.scss";

const Offer = ({ value, onHide, onConfirm, onReject }) => (
    <Modal
      show={Boolean(value)}
      onHide={onHide}
      size="sm"
      dialogClassName={s.confirmBuy}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to buy this?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {value && (
          <div className={s.offer}>
            <Image src={value.image}/>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="light"
          onClick={onReject}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={onConfirm}>
          Yes, buy it!
        </Button>
      </Modal.Footer>
    </Modal>
  );

export default Offer;
