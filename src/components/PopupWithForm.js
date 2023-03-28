import React from 'react';
function PopupWithForm(props) {
   return (
      <section className={(props.isOpen ? `popup popup_opened popup-${props.name} `:`popup popup-${props.name} `)}>
         <form
            onSubmit={props.onSubmit}
            noValidate
            className={`popup__form popup__container popup-${props.name}__container`}
         >
            <button
               onClick={props.onClose}
               aria-label="Close"
               type="button"
               className={`popup__button-close popup-${props.name}__button-close`}
            ></button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className={`popup__button popup__button-${props.button}`}>
               {props.textButton}
            </button>
         </form>
      </section>
   )
}export default PopupWithForm;