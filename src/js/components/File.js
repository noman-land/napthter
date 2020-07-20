import React from 'react';

import styles from '../../sass/Folder.module.sass';

export const File = ({ children }) => (
  <li className={styles.file}>{children}</li>
);
