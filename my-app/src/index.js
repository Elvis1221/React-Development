import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 const messageObj = [
    {
        id: '1',
        message: 'HI'
    },
    {
        id: '2',
        message: 'HOW ARE YOU?'
    },
    {
        id: '3',
        message: 'I`m fine'
    },
    {
        id: '4',
        message: 'Yourself?'
    },
];

const dialogObj = [
    {
        id: '1',
        name: 'Elvis',
    },
    {
        id: '2',
        name: 'Dinam',
    },
    {
        id: '3',
        name: 'Smouk',
    },
    {
        id: '4',
        name: 'Zik',
    },
    {
        id: '5',
        name: 'Rita',
    },
];

 const postsObj = [
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
];

ReactDOM.render(
    <React.StrictMode>
        <App messageObj={messageObj} dialogObj={dialogObj} postsObj={postsObj}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
