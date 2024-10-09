import React from 'react';
import { Link } from 'react-router-dom';
import './overlay.scss';

const Overlay = ({ isVisible, onClose, links }) => {
  if (!isVisible) return null;

  return (
    <>
      <div className="overlay">
        <div className="overlay__content">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={onClose}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={onClose} className="overlay__close">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Overlay;
