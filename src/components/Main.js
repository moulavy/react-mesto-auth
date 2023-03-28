import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import Card from './Card.js'
function Main(props) {

   const currentUser = React.useContext(CurrentUserContext);

   return (
      <main className="content container">
         <section className="profile">
            <button
               type="button"
               className="profile__button-avatar"
               onClick={props.onEditAvatar}
            >
               <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
            </button>
            <div className="profile__info">
               <h1 className="profile__name">{currentUser.name}</h1>
               <button aria-label="Edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
               <p className="profile__description">{currentUser.about}</p>
            </div>
            <button aria-label="Add" className="profile__add-button" onClick={props.onAddPlace}></button>
         </section>
         <section className="elements">
            <ul className="elements__list">
               {props.cards.map((card) =>
                  <Card
                     onCardLike={props.onCardLike}
                     onCardClick={props.onCardClick}
                     onCardDelete={props.onCardDelete}
                     card={card}
                     key={card._id}
                  />
               )}
            </ul>
         </section>
      </main>
   );
}

export default Main;
