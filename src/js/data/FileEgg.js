import { Record } from 'immutable';

export default class FileEgg extends Record({
  content: null,
  hash: null,
  preview: null
}) {}

FileEgg.fromJS = file => new FileEgg(file);
