import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../sass/Sidebar.module.sass';
import { routes } from '../constants/routes';

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <ul className={styles.sidebar_items}>
        {routes.map(({ icon, label, path }) => (
          <li className={styles.sidebar_item} key={label}>
            <NavLink
              activeClassName={styles.selected}
              className={styles.sidebar_item_link}
              exact={true}
              to={`/${path}`}
            >
              <i className={classNames(icon, styles.icon)} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
