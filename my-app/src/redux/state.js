import s from "../components/Dialogs/dialogs.module.css";
import React from "react";

export const state = {
    profilePage: {
        postsObj: [
            {
                id: 1,
                LikesCount: '15',
                message: 'Mi,how are post',
            },
            {
                id: 2,
                LikesCount: '20',
                message: 'My next post',
            },
            {
                id: 3,
                LikesCount: '24',
                message: 'Talk my  post',
            },
        ],
        //доработать информацию о пользователе.
        // userInfoObj:[
        //     {
        //         city:'Grodno',
        //         language:'Grodno',
        //         interests:''
        //     }
        // ]}]
    },
    dialogsPage: {
        messageObj: [
            {
                server: {
                    id: 1,
                    user: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
                    message: 'Здарова братка! Как дела? Что нового?',
                },

                local: {
                    id: 1,
                    user: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
                    message: 'Хай братка! Все нормально,из  нового... Учу инглиш) А ты чем занимаешься?'

                }
            },
            {
                server: {
                    id: 2,
                    user: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
                    message: 'Да я ВОВ ебашу)',
                },

                local: {
                    id: 2,
                    user: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
                    message: 'Задрот блять)!'
                }
            },
        ],
        dialogObj: [
            {
                id: 1,
                userImg: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
                name: 'Elvis',
            },
            {
                id: 2,
                userImg: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
                name: 'Dinam',
            },
            {
                id: 3,
                userImg: "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19707.png",
                name: 'Smouk',
            },
            {
                id: 4,
                userImg: "https://pngimg.com/uploads/car_logo/car_logo_PNG1667.png",
                name: 'Zik',
            },
            {
                id: 5,
                userImg: "https://pngimg.com/uploads/car_logo/car_logo_PNG1665.png",
                name: 'Rita',
            },
            {
                id: 6,
                userImg: "https://pngimg.com/uploads/car_logo/car_logo_PNG1655.png",
                name: 'Igor',
            },
        ],
    },
    navBarPage: {
        friends: [
            {
                id: 1,
                userImg: "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
                name: 'Andrey'
            },
            {
                id: 2,
                userImg: "https://mir-avatarok.3dn.ru/_si/0/91640574.png",
                name: 'Igor'
            },
            {
                id: 3,
                userImg: "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
                name: 'Vika'
            },
        ]
    }

};

