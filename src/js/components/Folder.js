import React from 'react';
import { Record } from 'immutable';

import styles from '../../sass/Folder.module.sass';

import { File } from './File';

const renderTree = node =>
  Record.isRecord(node) ? (
    <File key={node.preview}>{node.preview}</File>
  ) : (
      <Folder files={node} key={node.toString()} />
    );

export const Folder = ({ files }) => (
  <ul className={styles.folder}>{files.map(renderTree)}</ul>
);
