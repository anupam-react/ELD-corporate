import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function PopUp({children , title , openModal, setOpenModal }) {


  return (
    <>
      <Modal style={{background:"transparent" , display:"flex", justifyContent:"center" , alignItems:"center"}} dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>

      </Modal>
    </>
  );
}
