import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";

export const Navbar = ({navBar}) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile' activeClassName={s.activeLink}>Профиль</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/News' activeClassName={s.activeLink}>Новости</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Music' activeClassName={s.activeLink}>Музыка</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Settings' activeClassName={s.activeLink}>Настройки</NavLink>
        </div>
        <div className={s.friends}>
            {
                navBar.friends.map(n => <Friends name={n.name} userImg={n.userImg} id={n.id}/>)
            }
        </div>

    </nav>
};
