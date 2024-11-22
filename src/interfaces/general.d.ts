interface CardProps {
  isOpen: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit?: () => void;
  handleReturn?: () => void;
}
