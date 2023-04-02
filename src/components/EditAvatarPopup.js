import React from 'react';
import PopupWithForm from "./PopupWithForm";
function EditAvatarPopup({isOpen,onUpdateAvatar,onClose}) {
   const avatarRef = React.useRef();
   React.useEffect(() => {
      avatarRef.current.value = '';
   }, [isOpen]);

   function handleSubmit(e) {
      e.preventDefault();
      onUpdateAvatar({
         avatar: avatarRef.current.value,
      });
   }

   return (
      <PopupWithForm
         onSubmit={handleSubmit}
         onClose={onClose}
         isOpen={isOpen}
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