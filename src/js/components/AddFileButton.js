import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'semantic-ui-react';

import styles from '../../sass/AddFileButton.module.sass';
import { readMeta } from '../utils/metadataUtils';

export const AddFileButton = () => {
  const handleClick = useCallback(() => {
    fileInputRef.current.click()
  }, []);
  const handleChange = useCallback(({ target: { files: [file] } }) => {
    readMeta(file).then(meta => {
      // addToLibrary(meta);
    })
  }, []);

  const fileInputRef = useRef(null);

  return (
    <span className={styles.button_wrapper}>
      <Button
        circular={true}
        color="teal"
        icon="add"
        onClick={handleClick}
        size="large"
      />
      <input
        hidden={true}
        onChange={handleChange}
        ref={fileInputRef}
        type="file"
      />
    </span>
  );
}