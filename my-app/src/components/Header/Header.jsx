import React from "react";
import s from './header.module.css'
import {Login} from "./Login/Login";

const Header = () => (
  <header className={s.header}>
    <h3 className={s.logo}>LOGO</h3>
    <Login/>
    {/*<img*/}
    {/*    src="https://pngimg.com/uploads/intel/intel_PNG11.png"*/}
    {/*    alt=""/>*/}
  </header>
);

export default Header
