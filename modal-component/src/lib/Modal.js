import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

/**
 * This component display a modal
 * @param {*} props
 * @returns {JSX} react component
 */
export default function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.message}</h3>
      <button
        type="button"
        className="modal-close-button"
        onClick={props.onClose}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};
