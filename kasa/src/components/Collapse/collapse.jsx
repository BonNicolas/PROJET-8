import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };


  const renderContent = () => {
    return isOpen ? (
      <p className="collapse__content">
        {props.content}
      </p>
    ) : null;
  };

  return (
    <div className="collapse__container">
      <div className="collapse__bloc">
        <h2 className="collapse__title">{props.title}</h2>
        <FontAwesomeIcon className="collapse__icon" onClick={(toggleCollapse)} icon={faChevronUp} size="xl"></FontAwesomeIcon>
      </div>
      <div className="collapse__render-content">{renderContent()}</div>
    </div>
  );
}

export default Collapse;