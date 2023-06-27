import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import "./Modal.css";

const Modal = ({ isVisible, hide, title, size, ...props }) =>

    isVisible 
    ? ReactDOM.createPortal(
      <>
        <div className="modal">
          <div onClick={hide} className="modalOverlay">
            <div className={size === "small" ? "modalSmall" : "modalBig"}>
              <div className="modalContent">
                <h4>{title}</h4>
                <div className="modalBody">{props.children}</div>
                <button 
                  type="button" 
                  className="modalCloseButton"
                  onClick={hide}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>   
      </>,document.body
      ) : null;


Modal.prototypes = 
{
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,

}

export default Modal;