export const BASE_URL = 'https://api.nomoreparties.co';
export const register = (email, password) => {
   return fetch(`${BASE_URL}/signup`, {
      methos: 'POST',
      headers: {         
         'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,password})
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }
         return Promise.reject(`Ошибка: ${res.status}`);
   })
}

export const authorize = ({email,password}) => {
   return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
   })
      .then((res => res.json()))
      .then((data) => {
         if (data.jwt) {
            localStorage.setItem('jwt', data.jwt);
            return data;
         }
      })
   .catch(err=>console.log(err))
}

