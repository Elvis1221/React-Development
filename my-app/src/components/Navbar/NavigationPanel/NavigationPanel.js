import React from "react";

import {NavLink} from "react-router-dom";

import {navigationData} from "./NavigationPanel.config";

import s from "../Navbar.module.css";


export const NavigationPanel = () => (
  <>
    {
      navigationData.map((item, index) =>
        <div key={index} className={s.item}>
          <NavLink
            to={item.path}
            activeClassName={s.activeLink}
            children={item.title}
          />
        </div>
      )
    }
  </>
);

