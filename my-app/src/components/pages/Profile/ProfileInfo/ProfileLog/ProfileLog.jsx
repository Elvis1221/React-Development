import React from "react";
import s from './ProfileLog.module.css'

export const ProfileLogo = () => {
    return <div>
        <div className={s.userInfo}>
            <img className={s.userLog}
                 src="https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg"
                 alt=""
            />
            <p className={s.text}>
                Каждый веб-разработчик знает, что такое текст-«рыба».
                Используется он веб-дизайнерами для вставки
                на интернет-страницы и демонстрации внешнего вида контента,
                просмотра шрифтов, абзацев, отступов и т.д.
            </p>
        </div>
    </div>

};
