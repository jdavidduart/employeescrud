import Modal from "react-bootstrap/Modal";

export default function CustomModal({
  title,
  isOpen = false,
  onClose = () => null,
  children,
}) {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
