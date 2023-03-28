import React from 'react';
function ImagePopup(props) {
   return (
      <section className={(props.isOpen ? "popup-img popup popup_opened" : "popup-img popup")}>
         <div className="popup-img__container">
            <button
               onClick={props.onClose}
               aria-label="Close"
               type="button"
               className="popup__button-close popup-img__button-close"
            ></button>
            <img src={props.card.link} alt={props.card.name} className="popup-img__photo" />
            <p className="popup-img__subtitle">{props.card.name }</p>
         </div>
      </section>
   )
}
export default ImagePopup;
