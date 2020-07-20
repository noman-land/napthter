import ID3Writer from 'browser-id3-writer';
import * as mm from 'music-metadata-browser';

export const writeMeta = file => {
  return file.arrayBuffer().then(buffer => {
    const writer = new ID3Writer(buffer);
  })
}

export const readMeta = file => {
  return mm.parseBlob(file);
}

