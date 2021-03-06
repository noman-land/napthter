import React from 'react';
import { useSelector } from 'react-redux';

import { AddFileButton } from './AddFileButton';
import { Folder } from './Folder';
import { Page } from './Page';
import { selectFiles } from '../selectors/filesSelectors';

export const Home = () => {
  const files = useSelector(selectFiles);
  return (
    <Page label="Home">
      <Folder files={files} />
      <AddFileButton />
    </Page>
  );
};
