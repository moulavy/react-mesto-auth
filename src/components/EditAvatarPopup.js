import React from 'react';
import PopupWithForm from "./PopupWithForm";
function EditAvatarPopup(props) {
   const avatarRef = React.useRef();

   function handleSubmit(e) {
      e.preventDefault();
      props.onUpdateAvatar({
         avatar: avatarRef.current.value,
      });
      avatarRef.current.value = '';
   }

   return (
      <PopupWithForm
         onSubmit={handleSubmit}
         onClose={props.onClose}
         isOpen={props.isOpen}
         name='avatar'
         title='Обновить аватар'
         textButton='Сохранить'
         button='save'
         children={
            <>
               <input
                  placeholder="Ссылка на изображение"
                  id="avatar-input"
                  name="avatar"
                  required
                  type="url"
                  className="popup__input popup__input_value_avatar"
                  ref={avatarRef}
               />
               <span className="avatar-input-error popup__error popup__error_visible"></span>
            </>
         }
      />           
   )
}

export default EditAvatarPopup;