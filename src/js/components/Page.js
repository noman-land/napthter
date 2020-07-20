import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../sass/Page.module.sass';

export const Page = ({ children, label }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{label}</h2>
      <div className={styles.content_wrapper}>{children}</div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};
