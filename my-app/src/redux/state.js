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
    },
    dialogsPage: {
        messageObj: [
            {
                id: 1,
                userImg: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
                message: 'Hi! How are you?'
            },
            {
                id: 2,
                userImg: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
                message: 'Hi. I`m fine'
            },
            // {
            //     id: 3,
            //     message: ''
            // },
            // {
            //     id: 4,
            //     message: 'Yourself?'
            // },
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
};

