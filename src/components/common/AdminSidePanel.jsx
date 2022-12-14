import { ADMIN_CATEGORIES, ADMIN_PRODUCTS, ADMIN_USERS } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Produits
        </NavLink>
        <NavLink to={ADMIN_CATEGORIES}>
          <div className="sidenavigation-item">
            <h4 className="sidenavigation-menu my-0">Categorie</h4>
          </div>
        </NavLink>
        <NavLink to={ADMIN_USERS}>
          <div className="sidenavigation-item">
            <h4 className="sidenavigation-menu my-0">Users</h4>
          </div>
        </NavLink>
      </div>
    </div>
  </aside>
);

export default SideNavigation;
