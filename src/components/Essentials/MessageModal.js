import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";

const MessageModal = ({ message, onClose }) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onClose]);

  const handleModalClick = (event) => {
    // Close the modal if the click occurs outside the modal content
    if (!event.target.classList.contains("modal-content")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg--800 bg-opacity-50 modal-container"
      onClick={handleModalClick}
    >
      <div className="modal-content bg-gray-100 w-96 h-60 flex flex-col items-center justify-center rounded-2xl">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/emoji/48/wrapped-gift.png"
          alt="wrapped-gift"
        />
        <div className="space-y-5 text-center">
          <h1 className="font-bold text-xl">{message}</h1>
          <Button className="" onClick={onClose}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
};

MessageModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MessageModal;
