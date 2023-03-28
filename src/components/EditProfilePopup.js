import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
   const [name, setName] = React.useState('');
   const [description, setDescription] = React.useState('');
   const currentUser = React.useContext(CurrentUserContext);   

   React.useEffect(() => {
      setName(currentUser.name);
      setDescription(currentUser.about);
   }, [currentUser,props.isOpen]); 

   function handleChangeName(e) {
      setName(e.target.value);
   }
   function handleChangeDescription(e) {
      setDescription(e.target.value);
   }
   function handleSubmit(e) {      
      e.preventDefault();
      props.onUpdateUser({
         name,
         about: description,
      });
   } 

   return(
   <PopupWithForm
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      name='edit'
      title='Редактировать профиль'
      textButton='Сохранить'
      button='save'
      children={
         <>
            <input
               onChange={handleChangeName}
               value={name || ''}
               placeholder="Имя"
               name="name"
               id="name-input"
               type="text"
               minLength="2"
               maxLength="40"
               required
               className="popup__input popup__input_value_name"
            />
            <span className="name-input-error popup__error popup__error_visible"></span>
            <input
               value={description || ''}
               onChange={handleChangeDescription}
               placeholder="О себе"
               id="description-input"
               name="about"
               minLength="2"
               maxLength="200"
               required
               type="text"
               className="popup__input popup__input_value_description"
            />
            <span className="description-input-error popup__error popup__error_visible"></span>
         </>
      }
      />
   )
}
export default EditProfilePopup;