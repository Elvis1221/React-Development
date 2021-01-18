// import React, { useState} from 'react';
//
// import s from './setmessages.module.css'
// import {messages} from "../../Diaglogs.mock";
//
// export const SetMessage = () => {
//   const [message, setMessage] = useState([messages]);
//   const addMessage = () => {
//     setMessage((message) => {
//         return [
//           ...message,
//           {
//             server: {
//               id: 1,
//               user: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
//               message: 'Здарова братка! Как дела? Что нового?',
//             },
//
//             local: {
//               id: 1,
//               user: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
//               message: 'Хай братка! Все нормально,из  нового... Учу инглиш) А ты чем занимаешься?'
//
//             }
//           }
//         ]
//       }
//     )
//   };
//   return (
//     <div className={s.setMessage}>
//       <textarea></textarea>
//       <button onClick={addMessage}>
//         Отправить
//       </button>
//     </div>
//   )
// };
//
