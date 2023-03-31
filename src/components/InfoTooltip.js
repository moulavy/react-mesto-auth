import React from 'react';
function InfoTooltip(props) {
   return (
      <section className={(props.isOpen ? 'popup  popup-tooltip popup_opened' : 'popup  popup-tooltip')}>
         <div className="popup-tooltip__container popup__container">
            <button
               onClick={props.onClose}
               aria-label="Close"
               type="button"
               className="popup__button-close popup-tooltip__button-close"
            ></button>
             <img className="popup-tooltip__image" src={props.tooltip.image} alt={props.tooltip.text} />
            <h2 className="popup-tooltip__title" >{props.tooltip.text}</h2> 
            
         </div>
      </section>
   );
}
export default InfoTooltip;