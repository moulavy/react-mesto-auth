import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
   const [nameCard, setNameCard] = React.useState('');
   const [link, setLink] = React.useState(''); 
   
   React.useEffect(() => {
      setNameCard('');
      setLink('');
   }, [props.isOpen]); 

   function handleChangeNameCard(e) {
      setNameCard(e.target.value);
   }
   function handleChangeUrl(e) {
      setLink(e.target.value);
   }
   function handleSubmit(e) {
      e.preventDefault();
      props.onAddPlace({
         name: nameCard,
         link
      })
   }

   return (
      <PopupWithForm
         onSubmit={handleSubmit}
         isOpen={props.isOpen}
         onClose={props.onClose}
         name='add'
         title='Новое место'
         textButton='Создать'
         button='add'
         children={
            <>
               <input
                  onChange={handleChangeNameCard}
                  value={nameCard}
                  id="name-img-input"
                  type="text"
                  minLength="2"
                  maxLength="30"
                  name="name"
                  required
                  placeholder="Название"
                  className="popup__input popup__input_value_name-img"
               />
               <span className="popup__error popup__error_visible name-img-input-error"></span>
               <input
                  onChange={handleChangeUrl}
                  value={link}
                  id="link-img-input"
                  type="url"
                  required
                  name="link"
                  placeholder="Ссылка на картинку"
                  className="popup__input popup__input_value_link-img"
               />
               <span className="popup__error popup__error_visible link-img-input-error"></span>
            </>
         }
      />
   )
}
export default AddPlacePopup;